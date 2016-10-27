'use strict';

/* Add move option to array */
Array.prototype.move = function (old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this;
};

/* Create appDrawer methods */
var appDrawer = {
    inEditMode: false,
    inFavorites: false,
    drawerScrolling: false,
    favoriteArray: [],
    iconContainer: document.getElementById('iconContainer'),
    showEditFav: function (nohide) {
        var selectors = document.getElementsByClassName('check'),
            i;
        for (i = 0; i < selectors.length; i += 1) {
            if (selectors[i].title === 'inFav') {
                selectors[i].style.opacity = 1;
            } else {
                selectors[i].style.opacity = 0.2;
            }
            if (nohide) {
                selectors[i].style.display = 'block';
            } else {
                selectors[i].style.display = 'none';
            }
        }
    },
    showEditApp: function () {
        var sheet = document.createElement('style');
        if (this.inEditMode) {
            sheet.innerHTML = ".moveup, .movedown{display:block;}";
        } else {
            sheet.innerHTML = ".moveup, .movedown{display:none;}";
        }
        document.body.appendChild(sheet);
    },
    editMode: function (nohide) {
        if (this.inFavorites) {
            this.showEditApp(); //edit the app in Favorites
        } else {
            this.showEditFav(nohide); //add apps to favorites
        }
    },
    saveLocal: function (bundle, name, save) {
        if (save) {
            this.favoriteArray.push(bundle + '~' + name);
        } else {
            var e = this.favoriteArray.indexOf(bundle + '~' + name);
            if (e !== -1) {
                this.favoriteArray.splice(e, 1);
            }
        }
        localStorage.appLauncher = JSON.stringify(this.favoriteArray);
    },
    addToStorage: function (span, bundle, name) {
        span.setAttribute('title', 'inFav');
        span.style.opacity = 1;
        this.saveLocal(bundle, name, true);
    },
    removeFromStorage: function (span, bundle, name) {
        span.setAttribute('title', 'null');
        span.style.opacity = 0.2;
        this.saveLocal(bundle, name, false);
    },
    onload: function () {
        var storage = JSON.parse(localStorage.appLauncher),
            i, c;
        if (storage) {
            for (i = 0; i < storage.length; i += 1) {
                c = document.getElementById(storage[i].split('~')[0]);
                if (c !== null) {
                    c.children[0].children[2].setAttribute('title', 'inFav');
                }
            }
        }
    },
    moveItem: function (pos, el) {
        var bundle, name, e;
        bundle = el.parentNode.parentNode.id;
        name = el.parentNode.parentNode.getAttribute('tag');
        e = this.favoriteArray.indexOf(bundle + '~' + name);
        if (pos === 'up') {
            if ((e - 1) >= 0) {
                this.favoriteArray.move(e, e - 1);
            }
        } else {
            if ((e + 1) <= this.favoriteArray.length - 1) {
                this.favoriteArray.move(e, e + 1);
            }
        }
        localStorage.appLauncher = JSON.stringify(this.favoriteArray);
        this.favApps();
        this.inEditMode = true;
    },
    createItemForLauncher: function (name, bundle) {
        var li, div, img, label, span, span1, span2;
        li = document.createElement('li');
        div = document.createElement('div');
        img = document.createElement('img');
        label = document.createElement('label');
        span = document.createElement('span');
        span1 = document.createElement('span');
        span2 = document.createElement('span');
        span1.innerHTML = 'l';
        span2.innerHTML = 'x';
        span1.className = 'movedown';
        span2.className = 'moveup';
        span1.setAttribute('title', 'down');
        span2.setAttribute('title', 'up');
        span.innerHTML = "9";
        span.className = 'check';
        img.src = iconDrawer.getIconImage(bundle);
        label.innerHTML = name;
        div.className = 'iconHolder';
        li.setAttribute('title', bundle);
        li.setAttribute('tag', name);
        li.id = bundle;
        div.appendChild(img);
        div.appendChild(label);
        div.appendChild(span);
        div.appendChild(span1);
        div.appendChild(span2);
        li.appendChild(div);
        this.iconContainer.appendChild(li);
    },
    hideFavs: function () {
        var sheet;
        sheet = document.createElement('style');
        sheet.innerHTML = ".moveup, .movedown{display:none;}";
        document.body.appendChild(sheet);
        this.inEditMode = false;
        this.inFavorites = false;
    },
    allApps: function () {
        var i, name, bundle;
        document.getElementById('fav').style.backgroundColor = 'rgba(0,0,0,0)';
        document.getElementById('all').style.backgroundColor = 'rgba(0,0,0,0.1)';
        document.getElementById('edit').innerHTML = '1';
        this.hideFavs();
        this.inFavorites = false;
        this.iconContainer.innerHTML = '';
        this.inEditMode = false;
        for (i = 0; i < iconDrawer.appInfo.length; i += 1) {
            name = iconDrawer.appInfo[i].split('-')[0];
            bundle = iconDrawer.appInfo[i].split('-')[1];
            this.createItemForLauncher(name, bundle);
        }
        this.onload();
    },
    savedLocalStorage: function () {
        if (localStorage.appLauncher !== null && localStorage.appLauncher !== undefined && localStorage.appLauncher !== 'null' && localStorage.appLauncher !== 'undefined') {
            return true;
        }
        return false;
    },
    favApps: function () {
        var storage, i, e, name, bundle;
        document.getElementById('fav').style.backgroundColor = 'rgba(0,0,0,0.1)';
        document.getElementById('all').style.backgroundColor = 'rgba(0,0,0,0)';
        document.getElementById('edit').innerHTML = 'Z';
        this.inFavorites = true;
        iconDrawer.favInfo = [];
        this.iconContainer.innerHTML = '';
        this.inEditMode = false;
        if (this.savedLocalStorage()) {
            storage = JSON.parse(localStorage.appLauncher);
            if (storage) {
                for (i = 0; i < storage.length; i += 1) {
                    iconDrawer.getFavList(storage[i].split('~')[0], storage[i].split('~')[1]);
                }
                for (e = 0; e < iconDrawer.favInfo.length; e += 1) {
                    name = iconDrawer.favInfo[e].split('-')[0];
                    bundle = iconDrawer.favInfo[e].split('-')[1];
                    this.createItemForLauncher(name, bundle);
                }
            }
        }
    },
    initializeAppDrawer: function () {
        iconDrawer.getAppList(); //gets app list, and makes array of apps (Cycript)
        if (this.savedLocalStorage()) {
            var storage = JSON.parse(localStorage.appLauncher), i;
            if (storage) {
                for (i = 0; i < storage.length; i += 1) {
                    appDrawer.favoriteArray.push(storage[i]); //push back to local array
                }
            }
        }
        appDrawer.favApps();
    }
};

//initialize all the things
try {
    appDrawer.initializeAppDrawer();
} catch (err) {
    //alert("Show this error to JunesiPhone" + err);
}

/* Events used to control the appDrawer */
appDrawer.iconContainer.addEventListener('touchmove', function () {
    appDrawer.drawerScrolling = true;
});
appDrawer.iconContainer.addEventListener('touchend', function (e) {
    if (!appDrawer.drawerScrolling) {
        if (appDrawer.inEditMode) {
            if (appDrawer.inFavorites) {
                if (e.target.title === 'up' || e.target.title === 'down') {
                    appDrawer.moveItem(e.target.title, e.target);
                }
            } else {
                var span = e.target.children[0].children[2];
                if (span.title === 'inFav') {
                    appDrawer.removeFromStorage(e.target.children[0].children[2], e.target.title, e.target.getAttribute('tag'));
                } else {
                    appDrawer.addToStorage(e.target.children[0].children[2], e.target.title, e.target.getAttribute('tag'));
                }
            }
        } else {
            iconDrawer.openApp(e.target.title);
        }
    }
    appDrawer.drawerScrolling = false;
});
document.getElementById('edit').addEventListener('click', function () {
    if (!appDrawer.inEditMode) {
        appDrawer.inEditMode = true;
        appDrawer.editMode(true);
    } else {
        appDrawer.inEditMode = false;
        appDrawer.editMode(false);
    }
});
document.getElementById('all').addEventListener('touchstart', function () {
    appDrawer.allApps();
});
document.getElementById('fav').addEventListener('touchstart', function () {
    appDrawer.favApps();
});
document.getElementById('close').addEventListener('touchstart', function () {
    document.getElementById('appDrawerDiv').style.top = '738px';
});
