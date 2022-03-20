// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"paralex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paralex = exports.mouseMoveParalex = void 0;

var mouseMoveParalex = function mouseMoveParalex(e) {
  var moveValueX = e.pageX * 0.04 + 40;
  var moveValueY = e.pageY * 0.04 + 40;
  var paralex = document.getElementById("paralex");
  paralex.style.backgroundPositionX = "".concat(e.pageX * 0.04 + 40, "%");
  paralex.style.backgroundPositionY = "".concat(e.pageY * 0.04 + 40, "%");
};

exports.mouseMoveParalex = mouseMoveParalex;

var paralex = function paralex() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var paralex = document.getElementById("paralex"); //Reset html divs

  paralex.innerHTML = "";

  for (var i = 0; i < 300; i++) {
    var div = document.createElement("div");
    div.className = "paralex__box";
    paralex.appendChild(div);
  }

  anime({
    targets: ".paralex__box",
    translateX: function translateX() {
      return anime.random(-windowWidth, windowWidth);
    },
    translateY: function translateY() {
      return anime.random(-windowHeight, windowHeight);
    },
    scale: function scale() {
      return anime.random(1, 3);
    },
    duration: 2000
  });
}; // mouseMoveParalex();


exports.paralex = paralex;
},{}],"resume.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skillWidth = void 0;

var skillWidth = function skillWidth(isResume) {
  var percentageBox = document.querySelectorAll(".skill__name--persentage");
  var innerBar = document.querySelectorAll(".skill__bar--inner");
  percentageBox.forEach(function (box) {
    return box.textContent = 0 + "%";
  });
  innerBar.forEach(function (bar, index) {
    if (isResume) {
      var x = setInterval(function () {
        percentageBox[index].textContent = +percentageBox[index].textContent.slice(0, -1) + 1 + "%";

        if (Number(bar.dataset.level) === Number(percentageBox[index].textContent.slice(0, -1))) {
          clearInterval(x);
        }
      }, 1000 / +bar.dataset.level);
    }

    bar.style.width = isResume ? "".concat(bar.dataset.level, "%") : "0%";
  });
};

exports.skillWidth = skillWidth;
},{}],"main-menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainMenu = void 0;

var _resume = require("./resume");

var _paralex = require("./paralex");

var mainMenu = function mainMenu() {
  var mainMenu = document.querySelector(".main-menu");
  var links = document.querySelectorAll(".main-menu__link");
  var sections = document.querySelectorAll(".section");
  var leftSection = document.querySelector(".container__left");
  var toggleBtn = document.querySelector(".menu-toggle");
  var navArrowContainer = document.querySelector(".arrows__nav");

  var menuClick = function menuClick(e) {
    //Close the side menu
    leftSection.classList.remove("open"); //Remove open class from the toggle button

    toggleBtn.classList.remove("open");
    var link = e.target.closest(".main-menu__link");
    if (!link) return;
    if (link.classList.contains("main-menu__link--active")) return; //Regerate paralex

    (0, _paralex.paralex)();
    links.forEach(function (link) {
      return link.classList.remove("main-menu__link--active");
    });
    var id = link.getAttribute("href");
    var section = document.querySelector(id);
    sections.forEach(function (section) {
      return section.classList.remove("visible");
    });
    section.classList.add("visible");
    link.classList.add("main-menu__link--active");
    (0, _resume.skillWidth)(id === "#resume");
  };

  var openLeftContainer = function openLeftContainer(e) {
    e.currentTarget.classList.toggle("open");

    if (e.currentTarget.classList.contains("open")) {
      leftSection.classList.add("open");
    } else {
      leftSection.classList.remove("open");
    }
  };

  var navArrowClick = function navArrowClick(e) {
    if (e.target === navArrowContainer) {
      return;
    } //Regerate paralex


    (0, _paralex.paralex)();
    var direction = e.target.closest("div");
    var currSection = document.querySelector("section.visible");
    sections.forEach(function (section) {
      return section.classList.remove("visible");
    });
    links.forEach(function (link) {
      return link.classList.remove("main-menu__link--active");
    });

    if (direction.classList.contains("arrows__nav--right")) {
      if (currSection.nextElementSibling) {
        currSection.nextElementSibling.classList.add("visible");
        document.querySelector("a[href='#".concat(currSection.id, "']")).closest("li").nextElementSibling.querySelector("a").classList.add("main-menu__link--active");
      } else {
        sections[0].classList.add("visible");
        links[0].classList.add("main-menu__link--active");
      }
    } else if (direction.classList.contains("arrows__nav--left")) {
      if (currSection.previousElementSibling) {
        currSection.previousElementSibling.classList.add("visible");
        document.querySelector("a[href='#".concat(currSection.id, "']")).closest("li").previousElementSibling.querySelector("a").classList.add("main-menu__link--active");
      } else {
        sections[sections.length - 1].classList.add("visible");
        links[links.length - 1].classList.add("main-menu__link--active");
      }
    } else {
      return;
    }

    (0, _resume.skillWidth)(document.querySelector("#resume.visible"));
  };

  mainMenu.addEventListener("click", menuClick);
  toggleBtn.addEventListener("click", openLeftContainer);
  navArrowContainer.addEventListener("click", navArrowClick);
};

exports.mainMenu = mainMenu;
},{"./resume":"resume.js","./paralex":"paralex.js"}],"testimonialData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testimonialData = void 0;
var testimonialData = [{
  name: "ericconde",
  country: "United States",
  text: "Excellent. Very knowledgable and expert on React.JS . Highly recommended. Very fast and with high quality. Thank you.",
  image: "ericconde.jpeg"
}, {
  name: "earthgrob",
  country: "Netherlands",
  text: "Naeem is singlehandedly helping multiple companies deliver their MVP's. Don't look further, this is the guy.",
  image: "earthgrob.webp"
}, {
  name: "ezequielmarotte",
  country: "Argentina",
  text: "I am very happy to work with Naeem. I believe he will be a good fit for your project. He did a lot of extra work and revisions until the project had a good fit",
  image: "ezequielmarotte.webp"
}, {
  name: "akalamoyo",
  country: "United Kingdom",
  text: "Fantastic guy to work with. He is very responsive and knowledgeable. Also, he is very honest with his work.",
  image: "akalamoyo.jpeg"
}];
exports.testimonialData = testimonialData;
},{}],"testimonial.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testimonial = void 0;

var _testimonialData2 = require("./testimonialData");

var testimonial = function testimonial() {
  //Update age
  var ageContainer = document.getElementById("age-container");
  var age = new Date().getFullYear() - 2000; // birth year 2000

  ageContainer.innerText = age; //Testimonilas

  var testimonialContainer = document.querySelector(".testimonials");

  for (var i = 1; i <= _testimonialData2.testimonialData.length; i++) {
    var _testimonialData = _testimonialData2.testimonialData[i - 1],
        name = _testimonialData.name,
        country = _testimonialData.country,
        text = _testimonialData.text,
        image = _testimonialData.image;
    testimonialContainer.innerHTML += "\n    <div class=\"testimonial testimonial--".concat(i, "\">\n    <div class=\"testimonial__avatar\">\n      <img\n        src=\"images/testimonials/").concat(image, "\"\n        alt=\"").concat(name, "\"\n      />\n    </div>\n    <p class=\"testimonial__text\">\n      ").concat(text, "\n    </p>\n    <div class=\"testimonial__footer\">\n      <h5 class=\"testimonial__footer--name\">\n        <span>").concat(name, "</span>\n        <span>").concat(country, "</span>\n        <a\n          target=\"_blank\"\n          class=\"testimonial__footer--fiverr-link\"\n          href=\"https://www.fiverr.com/naeem215/build-a-mern-stack-web-application\"\n        >\n          <svg class=\"testimonial__footer--fiverr-icon\">\n            <use\n              xlink:href=\"icons/Mycollection-SVG-sprite.svg#fiverr\"\n            ></use>\n          </svg>\n        </a>\n      </h5>\n      <span class=\"testimonial__footer--icon\">\n        <svg class=\"testimonial--icon\">\n          <use\n            xlink:href=\"icons/Mycollection-SVG-sprite.svg#right-quote-sign\"\n          ></use>\n        </svg>\n      </span>\n    </div>\n  </div>\n    ");
  }

  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 2,
      margin: 40,
      // responsiveClass: true,
      dots: false,
      nav: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 2,
          nav: true
        }
      }
    });
  });
};

exports.testimonial = testimonial;
},{"./testimonialData":"testimonialData.js"}],"../node_modules/emailjs-com/source/models/EmailJSResponseStatus.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailJSResponseStatus = void 0;
var EmailJSResponseStatus = /** @class */ (function () {
    function EmailJSResponseStatus(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
    return EmailJSResponseStatus;
}());
exports.EmailJSResponseStatus = EmailJSResponseStatus;

},{}],"../node_modules/emailjs-com/source/services/ui/UI.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.clearAll = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.remove(this.DONE);
        form.classList.remove(this.ERROR);
    };
    UI.progressState = function (form) {
        this.clearAll(form);
        form.classList.add(this.PROGRESS);
    };
    UI.successState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.DONE);
    };
    UI.errorState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.ERROR);
    };
    UI.PROGRESS = 'emailjs-sending';
    UI.DONE = 'emailjs-success';
    UI.ERROR = 'emailjs-error';
    return UI;
}());
exports.UI = UI;

},{}],"../node_modules/emailjs-com/source/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailJSResponseStatus = exports.sendForm = exports.send = exports.init = void 0;
var EmailJSResponseStatus_1 = require("./models/EmailJSResponseStatus");
Object.defineProperty(exports, "EmailJSResponseStatus", { enumerable: true, get: function () { return EmailJSResponseStatus_1.EmailJSResponseStatus; } });
var UI_1 = require("./services/ui/UI");
var _userID = null;
var _origin = 'https://api.emailjs.com';
function sendPost(url, data, headers) {
    if (headers === void 0) { headers = {}; }
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function (event) {
            var responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', function (event) {
            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target));
        });
        xhr.open('POST', url, true);
        for (var key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
        xhr.send(data);
    });
}
function appendGoogleCaptcha(templatePrams) {
    var element = document && document.getElementById('g-recaptcha-response');
    if (element && element.value) {
        templatePrams['g-recaptcha-response'] = element.value;
    }
    element = null;
    return templatePrams;
}
function fixIdSelector(selector) {
    if (selector[0] !== '#' && selector[0] !== '.') {
        return '#' + selector;
    }
    return selector;
}
/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
function init(userID, origin) {
    _userID = userID;
    _origin = origin || 'https://api.emailjs.com';
}
exports.init = init;
/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {Object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function send(serviceID, templateID, templatePrams, userID) {
    var params = {
        lib_version: '2.6.4',
        user_id: userID || _userID,
        service_id: serviceID,
        template_id: templateID,
        template_params: appendGoogleCaptcha(templatePrams)
    };
    return sendPost(_origin + '/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json'
    });
}
exports.send = send;
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function sendForm(serviceID, templateID, form, userID) {
    if (typeof form === 'string') {
        form = document.querySelector(fixIdSelector(form));
    }
    if (!form || form.nodeName !== 'FORM') {
        throw 'Expected the HTML form element or the style selector of form';
    }
    UI_1.UI.progressState(form);
    var formData = new FormData(form);
    formData.append('lib_version', '2.6.4');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', userID || _userID);
    return sendPost(_origin + '/api/v1.0/email/send-form', formData)
        .then(function (response) {
        UI_1.UI.successState(form);
        return response;
    }, function (error) {
        UI_1.UI.errorState(form);
        return Promise.reject(error);
    });
}
exports.sendForm = sendForm;
exports.default = {
    init: init,
    send: send,
    sendForm: sendForm
};

},{"./models/EmailJSResponseStatus":"../node_modules/emailjs-com/source/models/EmailJSResponseStatus.js","./services/ui/UI":"../node_modules/emailjs-com/source/services/ui/UI.js"}],"contactForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contactForm = void 0;

var _emailjsCom = _interopRequireDefault(require("emailjs-com"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contactForm = function contactForm() {
  var contactForm = document.getElementById("contactForm");
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var subject = document.getElementById("subject");
  var message = document.getElementById("message");
  var sendBtn = document.getElementById("send-btn");
  mapboxgl.accessToken = "pk.eyJ1IjoibmFlZW0yNTIiLCJhIjoiY2tpNG0yN3V2MDl6bzJwcGJzampuOTkyaiJ9.hecYaIXlcm7rpSO1puaPmg";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/naeem252/ckh0czbun86d31an2i3c8kv4m",
    center: [90.25821, 23.921109],
    zoom: 12
  });
  map.scrollZoom.disable();
  var formControl = document.querySelectorAll(".form__control");

  var controlFocused = function controlFocused(e) {
    var formGroup = e.target.closest(".form__group");
    formGroup.classList.add("input-focus");
  };

  var controlBlur = function controlBlur(e) {
    var formGroup = e.target.closest(".form__group");

    if (!e.target.value.trim()) {
      formGroup.classList.remove("input-focus");
    }
  };

  formControl.forEach(function (input) {
    input.addEventListener("focus", controlFocused);
    input.addEventListener("blur", controlBlur);
  }); //send mesage by email

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!name.value.trim() || !email.value.trim() || !subject.value.trim() || !message.value.trim()) {
      alert("all fields are required");
      return;
    }

    sendBtn.textContent = "Sending...";
    sendBtn.disabled = true;

    _emailjsCom.default.sendForm("service_88tj3th", "template_7znvnlb", e.target, "user_GVb7xRkB8QbqPXfKvKKpz").then(function (result) {
      // console.log(result.text, result);
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Message"; //reset values

      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = ""; //Reset the focus state

      for (var i = 0; i < formControl.length; i++) {
        var formGroup = formControl[i].closest(".form__group");
        formGroup.classList.remove("input-focus");
      }

      alert("Thanks for contacting me!");
    }, function (error) {
      console.log(error.text);
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Message";
      alert("Something went wrong");
    });
  });
};

exports.contactForm = contactForm;
},{"emailjs-com":"../node_modules/emailjs-com/source/index.js"}],"portfolio.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortable = void 0;
var listItems = document.querySelectorAll(".sort__list--item");
var portfolios = document.querySelectorAll(".portfolio");

var listClicked = function listClicked(e) {
  listItems.forEach(function (list) {
    return list.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
  var category = e.currentTarget.dataset.category;
  portfolios.forEach(function (p) {
    if (category == "all") {
      p.classList.remove("remove");
      return;
    }

    if (p.dataset.category !== category) {
      p.classList.add("remove");
    } else {
      p.classList.remove("remove");
    }
  });
};

var sortable = function sortable() {
  listItems.forEach(function (list) {
    list.addEventListener("click", listClicked);
  });
};

exports.sortable = sortable;
},{}],"home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.home = void 0;

var home = function home() {
  var titleBox = document.querySelector(".home__content-text--title");
  var titles = titleBox.querySelectorAll("span");
  var currIndex = 3;
  titles.forEach(function (title, index) {
    title.style.transform = "translateX(".concat(index * 100, "%)");
  });

  var changedTitles = function changedTitles(i) {
    titles.forEach(function (title, index) {
      title.style.transform = "translateX(".concat((index + i - titles.length) * 100, "%)");
      title.style.opacity = index + i - titles.length === 0 ? 1 : 0;
    });
  };

  setInterval(function () {
    changedTitles(currIndex);
    currIndex--;

    if (currIndex === 0) {
      currIndex = 3;
    }
  }, 3000);
};

exports.home = home;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _paralex = require("./paralex");

var _resume = require("./resume");

var _mainMenu = require("./main-menu");

var _testimonial = require("./testimonial");

var _contactForm = require("./contactForm");

var _portfolio = require("./portfolio");

var _home = require("./home");

// import { skillWidth } from "./resume";
//home
(0, _home.home)(); //paralex
// window.addEventListener("mousemove", paralex);

(0, _paralex.paralex)();
window.addEventListener("mousemove", _paralex.mouseMoveParalex); //testimonial

(0, _testimonial.testimonial)(); //main-menu

(0, _mainMenu.mainMenu)(); // contact from

(0, _contactForm.contactForm)(); //resume sction
// skillWidth();
//portfolio

(0, _portfolio.sortable)(); //is now in resume page

if (window.location.href.includes("resume")) {
  (0, _resume.skillWidth)(true);
}
},{"./paralex":"paralex.js","./resume":"resume.js","./main-menu":"main-menu.js","./testimonial":"testimonial.js","./contactForm":"contactForm.js","./portfolio":"portfolio.js","./home":"home.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51323" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/bundler.js.map