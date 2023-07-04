/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-styling */ "./src/js/form-styling.js");
/* harmony import */ var _custom_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-lightbox */ "./src/js/custom-lightbox.js");

 // import suitesGridLightbox from './suites-grid-lightbox';
// import customSlider from './custom-slider';
// import splashPage from './splash-page';

(function () {
  var pageIds = {
    suites: "342",
    home: '2',
    location: '302'
  }; // if(document.querySelector(`body.page-id-${pageIds.suites}`)) {
  //     const sgl = suitesGridLightbox();
  //     sgl.init();
  // }
  // if(document.querySelector(`body.page-id-${pageIds.home}`)) {
  //     const cs = customSlider();
  //     cs.init(2);
  // }
  // if(document.querySelector(`body.page-id-${pageIds.location}`)) {
  //     const cs = customSlider();
  //     cs.init(6);
  // }

  var fs = Object(_form_styling__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var cl = Object(_custom_lightbox__WEBPACK_IMPORTED_MODULE_1__["default"])(); // const sp = splashPage();

  fs.init();
  cl.init(); // sp.init();

  document.querySelectorAll('.register-link').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      launchLightbox();
    });
  });
  document.querySelectorAll('.lightbox-dismiss').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      dismissLightbox();
    });
  });

  function launchLightbox() {
    var lightboxForm = document.querySelector('#lightboxForm');
    document.querySelector('body').classList.add('modal-open');
    lightboxForm.classList.add('lightbox-open');
    document.addEventListener("keyup", function (e) {
      if (e.key == 'Escape') {
        dismissLightbox();
      }
    });
    gsap.fromTo(lightboxForm, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 0.15
    });
  }

  function dismissLightbox() {
    fs.closeDropdown();
    document.querySelector('body').classList.remove('modal-open');
    document.querySelector('#lightboxForm').classList.remove('lightbox-open');
  }

  console.log('Website development by vanessarusu.com');
})();

/***/ }),

/***/ "./src/js/custom-lightbox.js":
/*!***********************************!*\
  !*** ./src/js/custom-lightbox.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var customLightbox = function customLightbox() {
  function addEventListeners() {
    document.querySelectorAll('.register-link').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        launchLightbox();
      });
    });
    document.querySelectorAll('.lightbox-dismiss').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        dismissLightbox();
      });
    });
  }

  function launchLightbox() {
    var lightboxForm = document.querySelector('#lightboxForm');

    if (!lightboxForm) {
      return;
    }

    document.querySelector('body').classList.add('modal-open');
    lightboxForm.classList.add('lightbox-open');
    document.addEventListener("keyup", function (e) {
      if (e.key == 'Escape') {
        dismissLightbox();
      }
    });
    gsap.fromTo(lightboxForm, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 0.15
    });
  }

  function dismissLightbox() {
    document.querySelector('body').classList.remove('modal-open');
    document.querySelector('#lightboxForm').classList.remove('lightbox-open');
  }

  function init() {
    addEventListeners();
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (customLightbox);

/***/ }),

/***/ "./src/js/form-styling.js":
/*!********************************!*\
  !*** ./src/js/form-styling.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var formStyling = function formStyling() {
  //     function dropdown() {
  //         var selectNodes = document.querySelectorAll('.wpforms-field-select select');
  //         for(var i = 0; i < selectNodes.length; i++) {
  //             // run for each select node
  //             var currentSelect = selectNodes[i];
  //             var liMarkup = '';
  //             var options = selectNodes[i].options;
  //             var currentSelectionText = currentSelect.options[selectNodes[i].selectedIndex].text;
  //             for(var j = 0; j < options.length; j++) {
  //                 var item = '<li class="dropdown-item"><a href="#"data-dd="'+currentSelect.getAttribute("id")+'" data-value="'+options[j].getAttribute('value')+'">'+options[j].innerHTML+'</a></li>';
  //                 liMarkup += item;
  //             }
  //             var html = '<div class="custom-dropdown"><p class="selected-option"><span class="text">'+currentSelectionText+'</span><span class="arrow"></span></p><ul class="dd-container">'+liMarkup+'</ul></div>';
  //             selectNodes[i].insertAdjacentHTML('afterend', html); 
  //         }
  //         document.querySelectorAll('.custom-dropdown .selected-option').forEach(function(el) {
  //             el.addEventListener('click', openDropdown);
  //         })
  //         // click on dropdown element
  //         document.querySelectorAll('.dropdown-item a').forEach(function(el) {
  //             el.addEventListener('click', function(e) {
  //                 e.preventDefault();
  //                 var findSelect = this.getAttribute('data-dd');
  //                 var originalSelect = document.querySelector("#"+findSelect);
  //                 updateOriginalSelect(this, originalSelect);
  //                 updateLabel(this, originalSelect);
  //                 closeDropdown();
  //             })
  //         });        
  //     }
  //     function updateLabel(clickedEl, originalSelect) {
  //         var labelTextNode = originalSelect.nextElementSibling.querySelector('.selected-option .text');
  //         labelTextNode.innerHTML = clickedEl.innerHTML;
  //     }
  //     function updateOriginalSelect(clickedEl, originalSelect) {
  //         for(var i = 0; i < originalSelect.options.length; i++) {
  //             if(originalSelect.options[i].getAttribute('value') === clickedEl.getAttribute('data-value')) {
  //                 originalSelect.options[i].setAttribute('selected', true);
  //             }
  //             else {
  //                 originalSelect.options[i].removeAttribute('selected');
  //             }
  //         }
  //     }
  //     function closeDropdown() {
  //         document.querySelectorAll('ul.dd-container').forEach(function(el) {
  //             el.classList.add('dd-closed');
  //             el.classList.remove('dd-open');
  //         })
  //     }
  //     function openDropdown() {
  //         this.nextElementSibling.classList.add('dd-open');
  //     }
  //     function init() {
  //         dropdown();
  //     }
  //     return {
  //         init: init,
  //         closeDropdown: closeDropdown
  //     }
  // });
  function dropdown() {
    var selectNodes = document.querySelectorAll('select');

    if (!selectNodes.length) {
      return;
    }

    for (var i = 0; i < selectNodes.length; i++) {
      // run for each select node
      var currentSelect = selectNodes[i];
      var liMarkup = '';
      var options = selectNodes[i].options;
      var currentSelectionText = currentSelect.options[selectNodes[i].selectedIndex].text;

      if (currentSelect.options[selectNodes[i].selectedIndex].classList.contains('empty')) {
        currentSelectionText = '';
      }

      for (var j = 0; j < options.length; j++) {
        var addEmpyClass = options[j].className === 'empty' ? 'empty' : '';
        var item = '<li class="dropdown-item ' + addEmpyClass + '"><a tabindex="0" href="#"data-dd="' + currentSelect.getAttribute("id") + '" data-value="' + options[j].getAttribute('value') + '">' + options[j].innerHTML + '</a></li>';
        liMarkup += item;
      }

      var html = '<div class="custom-dropdown"><p class="selected-option"><span class="text">' + currentSelectionText + '</span><span class="arrow"></span></p><ul class="dd-container">' + liMarkup + '</ul></div>';
      selectNodes[i].insertAdjacentHTML('afterend', html);
    }

    document.querySelectorAll('.custom-dropdown .selected-option').forEach(function (el) {
      el.addEventListener('click', openDropdown);
    }); // click on dropdown element

    document.querySelectorAll('.dropdown-item a').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var findSelect = this.getAttribute('data-dd');
        var originalSelect = document.querySelector("#" + findSelect);
        updateOriginalSelect(this, originalSelect);
        updateLabel(this, originalSelect);
        closeDropdown();
      });
    });
  }

  function updateLabel(clickedEl, originalSelect) {
    var labelTextNode = originalSelect.nextElementSibling.querySelector('.selected-option .text');
    labelTextNode.innerHTML = clickedEl.innerHTML;
  }

  function updateOriginalSelect(clickedEl, originalSelect) {
    for (var i = 0; i < originalSelect.options.length; i++) {
      if (originalSelect.options[i].getAttribute('value') === clickedEl.getAttribute('data-value')) {
        originalSelect.options[i].setAttribute('selected', true);
      } else {
        originalSelect.options[i].removeAttribute('selected');
      }
    }
  }

  function closeDropdown() {
    document.querySelectorAll('ul.dd-container').forEach(function (el) {
      el.classList.add('dd-closed');
      el.classList.remove('dd-open');
      document.removeEventListener('click', checkForOutsideClick);
      var dds = document.querySelectorAll('.custom-dropdown .selected-option');

      for (var i = 0; i < dds.length; i++) {
        dds[i].removeEventListener('click', closeDropdown);
      }
    });
  }

  function openDropdown() {
    this.nextElementSibling.classList.add('dd-open');
    document.addEventListener('click', checkForOutsideClick);
    var dds = document.querySelectorAll('.custom-dropdown .selected-option');

    for (var i = 0; i < dds.length; i++) {
      dds[i].addEventListener('click', closeDropdown);
    }
  }

  function checkForOutsideClick(e) {
    if (document.querySelectorAll('ul.dd-container.dd-open')) {
      if (!(e.target.tagName == 'A' || e.target.tagName == 'SPAN' || e.target.tagName == 'P')) {
        closeDropdown();
      }
    }
  }

  return {
    init: dropdown,
    closeDropdown: closeDropdown
  };
};

/* harmony default export */ __webpack_exports__["default"] = (formStyling);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tLWxpZ2h0Ym94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtLXN0eWxpbmcuanMiXSwibmFtZXMiOlsicGFnZUlkcyIsInN1aXRlcyIsImhvbWUiLCJsb2NhdGlvbiIsImZzIiwiZm9ybVN0eWxpbmciLCJjbCIsImN1c3RvbUxpZ2h0Ym94IiwiaW5pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJsYXVuY2hMaWdodGJveCIsImRpc21pc3NMaWdodGJveCIsImxpZ2h0Ym94Rm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJrZXkiLCJnc2FwIiwiZnJvbVRvIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiY2xvc2VEcm9wZG93biIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVycyIsImRyb3Bkb3duIiwic2VsZWN0Tm9kZXMiLCJsZW5ndGgiLCJpIiwiY3VycmVudFNlbGVjdCIsImxpTWFya3VwIiwib3B0aW9ucyIsImN1cnJlbnRTZWxlY3Rpb25UZXh0Iiwic2VsZWN0ZWRJbmRleCIsInRleHQiLCJjb250YWlucyIsImoiLCJhZGRFbXB5Q2xhc3MiLCJjbGFzc05hbWUiLCJpdGVtIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaHRtbCIsImluc2VydEFkamFjZW50SFRNTCIsIm9wZW5Ecm9wZG93biIsImZpbmRTZWxlY3QiLCJvcmlnaW5hbFNlbGVjdCIsInVwZGF0ZU9yaWdpbmFsU2VsZWN0IiwidXBkYXRlTGFiZWwiLCJjbGlja2VkRWwiLCJsYWJlbFRleHROb2RlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoZWNrRm9yT3V0c2lkZUNsaWNrIiwiZGRzIiwidGFyZ2V0IiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtDQUdBO0FBQ0E7QUFFQTs7QUFFQyxhQUFXO0FBRVIsTUFBSUEsT0FBTyxHQUFHO0FBQ1ZDLFVBQU0sRUFBRSxLQURFO0FBRVZDLFFBQUksRUFBRSxHQUZJO0FBR1ZDLFlBQVEsRUFBRTtBQUhBLEdBQWQsQ0FGUSxDQVNSO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxFQUFFLEdBQUdDLDZEQUFXLEVBQXRCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHQyxnRUFBYyxFQUF6QixDQXpCUSxDQTBCUjs7QUFFQUgsSUFBRSxDQUFDSSxJQUFIO0FBQ0FGLElBQUUsQ0FBQ0UsSUFBSCxHQTdCUSxDQThCUjs7QUFFQUMsVUFBUSxDQUFDQyxnQkFBVCxDQUEwQixnQkFBMUIsRUFBNENDLE9BQTVDLENBQW9ELFVBQVNDLEVBQVQsRUFBYTtBQUM3REEsTUFBRSxDQUFDQyxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixVQUFTQyxDQUFULEVBQVk7QUFDckNBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBQyxvQkFBYztBQUNqQixLQUhEO0FBSUgsR0FMRDtBQU9BUCxVQUFRLENBQUNDLGdCQUFULENBQTBCLG1CQUExQixFQUErQ0MsT0FBL0MsQ0FBdUQsVUFBU0MsRUFBVCxFQUFhO0FBQ2hFQSxNQUFFLENBQUNDLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQVNDLENBQVQsRUFBWTtBQUNyQ0EsT0FBQyxDQUFDQyxjQUFGO0FBQ0FFLHFCQUFlO0FBQ2xCLEtBSEQ7QUFJSCxHQUxEOztBQU9BLFdBQVNELGNBQVQsR0FBMEI7QUFDdEIsUUFBSUUsWUFBWSxHQUFHVCxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7QUFDQVYsWUFBUSxDQUFDVSxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxTQUEvQixDQUF5Q0MsR0FBekMsQ0FBNkMsWUFBN0M7QUFDQUgsZ0JBQVksQ0FBQ0UsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsZUFBM0I7QUFFQVosWUFBUSxDQUFDSSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFTQyxDQUFULEVBQVk7QUFDM0MsVUFBR0EsQ0FBQyxDQUFDUSxHQUFGLElBQVMsUUFBWixFQUFzQjtBQUNsQkwsdUJBQWU7QUFDbEI7QUFDSixLQUpEO0FBTUFNLFFBQUksQ0FBQ0MsTUFBTCxDQUFZTixZQUFaLEVBQTBCO0FBQ3RCTyxhQUFPLEVBQUU7QUFEYSxLQUExQixFQUdBO0FBQ0lBLGFBQU8sRUFBRSxDQURiO0FBRUlDLGNBQVEsRUFBRTtBQUZkLEtBSEE7QUFPSDs7QUFFRCxXQUFTVCxlQUFULEdBQTJCO0FBQ3ZCYixNQUFFLENBQUN1QixhQUFIO0FBQ0FsQixZQUFRLENBQUNVLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFNBQS9CLENBQXlDUSxNQUF6QyxDQUFnRCxZQUFoRDtBQUNBbkIsWUFBUSxDQUFDVSxhQUFULENBQXVCLGVBQXZCLEVBQXdDQyxTQUF4QyxDQUFrRFEsTUFBbEQsQ0FBeUQsZUFBekQ7QUFDSDs7QUFDREMsU0FBTyxDQUFDQyxHQUFSLENBQVksd0NBQVo7QUFDSCxDQXhFQSxHQUFELEM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUEsSUFBTXZCLGNBQWMsR0FBSSxTQUFsQkEsY0FBa0IsR0FBVztBQUUvQixXQUFTd0IsaUJBQVQsR0FBNkI7QUFDekJ0QixZQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixFQUE0Q0MsT0FBNUMsQ0FBb0QsVUFBU0MsRUFBVCxFQUFhO0FBQzdEQSxRQUFFLENBQUNDLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQVNDLENBQVQsRUFBWTtBQUVyQ0EsU0FBQyxDQUFDQyxjQUFGO0FBQ0FDLHNCQUFjO0FBQ2pCLE9BSkQ7QUFLSCxLQU5EO0FBUUFQLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsbUJBQTFCLEVBQStDQyxPQUEvQyxDQUF1RCxVQUFTQyxFQUFULEVBQWE7QUFDaEVBLFFBQUUsQ0FBQ0MsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3JDQSxTQUFDLENBQUNDLGNBQUY7QUFDQUUsdUJBQWU7QUFDbEIsT0FIRDtBQUlILEtBTEQ7QUFNSDs7QUFFRCxXQUFTRCxjQUFULEdBQTBCO0FBQ3RCLFFBQUlFLFlBQVksR0FBR1QsUUFBUSxDQUFDVSxhQUFULENBQXVCLGVBQXZCLENBQW5COztBQUVBLFFBQUcsQ0FBQ0QsWUFBSixFQUFrQjtBQUNkO0FBQ0g7O0FBRURULFlBQVEsQ0FBQ1UsYUFBVCxDQUF1QixNQUF2QixFQUErQkMsU0FBL0IsQ0FBeUNDLEdBQXpDLENBQTZDLFlBQTdDO0FBQ0FILGdCQUFZLENBQUNFLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLGVBQTNCO0FBRUFaLFlBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBU0MsQ0FBVCxFQUFZO0FBQzNDLFVBQUdBLENBQUMsQ0FBQ1EsR0FBRixJQUFTLFFBQVosRUFBc0I7QUFDbEJMLHVCQUFlO0FBQ2xCO0FBQ0osS0FKRDtBQU1BTSxRQUFJLENBQUNDLE1BQUwsQ0FBWU4sWUFBWixFQUEwQjtBQUN0Qk8sYUFBTyxFQUFFO0FBRGEsS0FBMUIsRUFHQTtBQUNJQSxhQUFPLEVBQUUsQ0FEYjtBQUVJQyxjQUFRLEVBQUU7QUFGZCxLQUhBO0FBT0g7O0FBRUQsV0FBU1QsZUFBVCxHQUEyQjtBQUN2QlIsWUFBUSxDQUFDVSxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxTQUEvQixDQUF5Q1EsTUFBekMsQ0FBZ0QsWUFBaEQ7QUFDQW5CLFlBQVEsQ0FBQ1UsYUFBVCxDQUF1QixlQUF2QixFQUF3Q0MsU0FBeEMsQ0FBa0RRLE1BQWxELENBQXlELGVBQXpEO0FBQ0g7O0FBRUQsV0FBU3BCLElBQVQsR0FBZ0I7QUFDWnVCLHFCQUFpQjtBQUNwQjs7QUFFRCxTQUFPO0FBQ0h2QixRQUFJLEVBQUVBO0FBREgsR0FBUDtBQUdILENBeEREOztBQTBEZUQsNkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUEsSUFBTUYsV0FBVyxHQUFJLFNBQWZBLFdBQWUsR0FBWTtBQUVqQztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BLFdBQVMyQixRQUFULEdBQW9CO0FBQ2hCLFFBQUlDLFdBQVcsR0FBR3hCLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBbEI7O0FBRUEsUUFBRyxDQUFDdUIsV0FBVyxDQUFDQyxNQUFoQixFQUF3QjtBQUNwQjtBQUNIOztBQUVELFNBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHRixXQUFXLENBQUNDLE1BQS9CLEVBQXVDQyxDQUFDLEVBQXhDLEVBQTRDO0FBQ3hDO0FBQ0EsVUFBSUMsYUFBYSxHQUFHSCxXQUFXLENBQUNFLENBQUQsQ0FBL0I7QUFDQSxVQUFJRSxRQUFRLEdBQUcsRUFBZjtBQUNBLFVBQUlDLE9BQU8sR0FBR0wsV0FBVyxDQUFDRSxDQUFELENBQVgsQ0FBZUcsT0FBN0I7QUFDQSxVQUFJQyxvQkFBb0IsR0FBR0gsYUFBYSxDQUFDRSxPQUFkLENBQXNCTCxXQUFXLENBQUNFLENBQUQsQ0FBWCxDQUFlSyxhQUFyQyxFQUFvREMsSUFBL0U7O0FBRUEsVUFBR0wsYUFBYSxDQUFDRSxPQUFkLENBQXNCTCxXQUFXLENBQUNFLENBQUQsQ0FBWCxDQUFlSyxhQUFyQyxFQUFvRHBCLFNBQXBELENBQThEc0IsUUFBOUQsQ0FBdUUsT0FBdkUsQ0FBSCxFQUFvRjtBQUNoRkgsNEJBQW9CLEdBQUcsRUFBdkI7QUFDUDs7QUFFRyxXQUFJLElBQUlJLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0wsT0FBTyxDQUFDSixNQUEzQixFQUFtQ1MsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxZQUFJQyxZQUFZLEdBQUdOLE9BQU8sQ0FBQ0ssQ0FBRCxDQUFQLENBQVdFLFNBQVgsS0FBeUIsT0FBekIsR0FBbUMsT0FBbkMsR0FBNkMsRUFBaEU7QUFDQSxZQUFJQyxJQUFJLEdBQUcsOEJBQTZCRixZQUE3QixHQUEyQyxxQ0FBM0MsR0FBaUZSLGFBQWEsQ0FBQ1csWUFBZCxDQUEyQixJQUEzQixDQUFqRixHQUFrSCxnQkFBbEgsR0FBbUlULE9BQU8sQ0FBQ0ssQ0FBRCxDQUFQLENBQVdJLFlBQVgsQ0FBd0IsT0FBeEIsQ0FBbkksR0FBb0ssSUFBcEssR0FBeUtULE9BQU8sQ0FBQ0ssQ0FBRCxDQUFQLENBQVdLLFNBQXBMLEdBQThMLFdBQXpNO0FBQ0FYLGdCQUFRLElBQUlTLElBQVo7QUFDSDs7QUFFRCxVQUFJRyxJQUFJLEdBQUcsZ0ZBQThFVixvQkFBOUUsR0FBbUcsaUVBQW5HLEdBQXFLRixRQUFySyxHQUE4SyxhQUF6TDtBQUNBSixpQkFBVyxDQUFDRSxDQUFELENBQVgsQ0FBZWUsa0JBQWYsQ0FBa0MsVUFBbEMsRUFBOENELElBQTlDO0FBQ0g7O0FBRUR4QyxZQUFRLENBQUNDLGdCQUFULENBQTBCLG1DQUExQixFQUErREMsT0FBL0QsQ0FBdUUsVUFBU0MsRUFBVCxFQUFhO0FBQ2hGQSxRQUFFLENBQUNDLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCc0MsWUFBN0I7QUFDSCxLQUZELEVBNUJnQixDQWdDaEI7O0FBQ0ExQyxZQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0MsT0FBOUMsQ0FBc0QsVUFBU0MsRUFBVCxFQUFhO0FBRS9EQSxRQUFFLENBQUNDLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQVNDLENBQVQsRUFBWTtBQUNyQ0EsU0FBQyxDQUFDQyxjQUFGO0FBQ0EsWUFBSXFDLFVBQVUsR0FBRyxLQUFLTCxZQUFMLENBQWtCLFNBQWxCLENBQWpCO0FBQ0EsWUFBSU0sY0FBYyxHQUFHNUMsUUFBUSxDQUFDVSxhQUFULENBQXVCLE1BQUlpQyxVQUEzQixDQUFyQjtBQUNBRSw0QkFBb0IsQ0FBQyxJQUFELEVBQU9ELGNBQVAsQ0FBcEI7QUFDQUUsbUJBQVcsQ0FBQyxJQUFELEVBQU9GLGNBQVAsQ0FBWDtBQUNBMUIscUJBQWE7QUFDaEIsT0FQRDtBQVFILEtBVkQ7QUFXSDs7QUFFRCxXQUFTNEIsV0FBVCxDQUFxQkMsU0FBckIsRUFBZ0NILGNBQWhDLEVBQWdEO0FBQzVDLFFBQUlJLGFBQWEsR0FBR0osY0FBYyxDQUFDSyxrQkFBZixDQUFrQ3ZDLGFBQWxDLENBQWdELHdCQUFoRCxDQUFwQjtBQUNBc0MsaUJBQWEsQ0FBQ1QsU0FBZCxHQUEwQlEsU0FBUyxDQUFDUixTQUFwQztBQUNIOztBQUVELFdBQVNNLG9CQUFULENBQThCRSxTQUE5QixFQUF5Q0gsY0FBekMsRUFBeUQ7QUFDckQsU0FBSSxJQUFJbEIsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHa0IsY0FBYyxDQUFDZixPQUFmLENBQXVCSixNQUExQyxFQUFrREMsQ0FBQyxFQUFuRCxFQUF1RDtBQUNuRCxVQUFHa0IsY0FBYyxDQUFDZixPQUFmLENBQXVCSCxDQUF2QixFQUEwQlksWUFBMUIsQ0FBdUMsT0FBdkMsTUFBb0RTLFNBQVMsQ0FBQ1QsWUFBVixDQUF1QixZQUF2QixDQUF2RCxFQUE2RjtBQUN6Rk0sc0JBQWMsQ0FBQ2YsT0FBZixDQUF1QkgsQ0FBdkIsRUFBMEJ3QixZQUExQixDQUF1QyxVQUF2QyxFQUFtRCxJQUFuRDtBQUNILE9BRkQsTUFHSztBQUNETixzQkFBYyxDQUFDZixPQUFmLENBQXVCSCxDQUF2QixFQUEwQnlCLGVBQTFCLENBQTBDLFVBQTFDO0FBQ0g7QUFDSjtBQUNKOztBQUVELFdBQVNqQyxhQUFULEdBQXlCO0FBQ3JCbEIsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixpQkFBMUIsRUFBNkNDLE9BQTdDLENBQXFELFVBQVNDLEVBQVQsRUFBYTtBQUM5REEsUUFBRSxDQUFDUSxTQUFILENBQWFDLEdBQWIsQ0FBaUIsV0FBakI7QUFDQVQsUUFBRSxDQUFDUSxTQUFILENBQWFRLE1BQWIsQ0FBb0IsU0FBcEI7QUFDQW5CLGNBQVEsQ0FBQ29ELG1CQUFULENBQTZCLE9BQTdCLEVBQXNDQyxvQkFBdEM7QUFDQSxVQUFJQyxHQUFHLEdBQUd0RCxRQUFRLENBQUNDLGdCQUFULENBQTBCLG1DQUExQixDQUFWOztBQUNBLFdBQUksSUFBSXlCLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBRzRCLEdBQUcsQ0FBQzdCLE1BQXJCLEVBQTZCQyxDQUFDLEVBQTlCLEVBQWtDO0FBQzlCNEIsV0FBRyxDQUFDNUIsQ0FBRCxDQUFILENBQU8wQixtQkFBUCxDQUEyQixPQUEzQixFQUFvQ2xDLGFBQXBDO0FBQ0g7QUFDSixLQVJEO0FBU0g7O0FBRUQsV0FBU3dCLFlBQVQsR0FBd0I7QUFDcEIsU0FBS08sa0JBQUwsQ0FBd0J0QyxTQUF4QixDQUFrQ0MsR0FBbEMsQ0FBc0MsU0FBdEM7QUFDQVosWUFBUSxDQUFDSSxnQkFBVCxDQUEwQixPQUExQixFQUFtQ2lELG9CQUFuQztBQUNBLFFBQUlDLEdBQUcsR0FBR3RELFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsbUNBQTFCLENBQVY7O0FBQ0ksU0FBSSxJQUFJeUIsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFHNEIsR0FBRyxDQUFDN0IsTUFBckIsRUFBNkJDLENBQUMsRUFBOUIsRUFBa0M7QUFDOUI0QixTQUFHLENBQUM1QixDQUFELENBQUgsQ0FBT3RCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDYyxhQUFqQztBQUNIO0FBQ1I7O0FBRUQsV0FBU21DLG9CQUFULENBQThCaEQsQ0FBOUIsRUFBaUM7QUFDN0IsUUFBR0wsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQix5QkFBMUIsQ0FBSCxFQUF5RDtBQUNyRCxVQUFHLEVBQUVJLENBQUMsQ0FBQ2tELE1BQUYsQ0FBU0MsT0FBVCxJQUFtQixHQUFuQixJQUEwQm5ELENBQUMsQ0FBQ2tELE1BQUYsQ0FBU0MsT0FBVCxJQUFtQixNQUE3QyxJQUF1RG5ELENBQUMsQ0FBQ2tELE1BQUYsQ0FBU0MsT0FBVCxJQUFtQixHQUE1RSxDQUFILEVBQXFGO0FBQ2pGdEMscUJBQWE7QUFDaEI7QUFDSjtBQUNKOztBQUVELFNBQU87QUFDSG5CLFFBQUksRUFBRXdCLFFBREg7QUFFSEwsaUJBQWEsRUFBRUE7QUFGWixHQUFQO0FBSUMsQ0E5S0Q7O0FBZ0xldEIsMEVBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCJpbXBvcnQgZm9ybVN0eWxpbmcgZnJvbSAnLi9mb3JtLXN0eWxpbmcnO1xuaW1wb3J0IGN1c3RvbUxpZ2h0Ym94IGZyb20gXCIuL2N1c3RvbS1saWdodGJveFwiO1xuXG4vLyBpbXBvcnQgc3VpdGVzR3JpZExpZ2h0Ym94IGZyb20gJy4vc3VpdGVzLWdyaWQtbGlnaHRib3gnO1xuLy8gaW1wb3J0IGN1c3RvbVNsaWRlciBmcm9tICcuL2N1c3RvbS1zbGlkZXInO1xuXG4vLyBpbXBvcnQgc3BsYXNoUGFnZSBmcm9tICcuL3NwbGFzaC1wYWdlJztcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHBhZ2VJZHMgPSB7XG4gICAgICAgIHN1aXRlczogXCIzNDJcIixcbiAgICAgICAgaG9tZTogJzInLFxuICAgICAgICBsb2NhdGlvbjogJzMwMidcbiAgICB9XG5cblxuICAgIC8vIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJvZHkucGFnZS1pZC0ke3BhZ2VJZHMuc3VpdGVzfWApKSB7XG4gICAgLy8gICAgIGNvbnN0IHNnbCA9IHN1aXRlc0dyaWRMaWdodGJveCgpO1xuICAgIC8vICAgICBzZ2wuaW5pdCgpO1xuICAgIC8vIH1cblxuICAgIC8vIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJvZHkucGFnZS1pZC0ke3BhZ2VJZHMuaG9tZX1gKSkge1xuICAgIC8vICAgICBjb25zdCBjcyA9IGN1c3RvbVNsaWRlcigpO1xuICAgIC8vICAgICBjcy5pbml0KDIpO1xuICAgIC8vIH1cblxuICAgIC8vIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJvZHkucGFnZS1pZC0ke3BhZ2VJZHMubG9jYXRpb259YCkpIHtcbiAgICAvLyAgICAgY29uc3QgY3MgPSBjdXN0b21TbGlkZXIoKTtcbiAgICAvLyAgICAgY3MuaW5pdCg2KTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBmcyA9IGZvcm1TdHlsaW5nKCk7XG4gICAgY29uc3QgY2wgPSBjdXN0b21MaWdodGJveCgpO1xuICAgIC8vIGNvbnN0IHNwID0gc3BsYXNoUGFnZSgpO1xuXG4gICAgZnMuaW5pdCgpO1xuICAgIGNsLmluaXQoKTtcbiAgICAvLyBzcC5pbml0KCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVnaXN0ZXItbGluaycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsYXVuY2hMaWdodGJveCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWdodGJveC1kaXNtaXNzJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRpc21pc3NMaWdodGJveCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGxhdW5jaExpZ2h0Ym94KCkge1xuICAgICAgICB2YXIgbGlnaHRib3hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpZ2h0Ym94Rm9ybScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgICBsaWdodGJveEZvcm0uY2xhc3NMaXN0LmFkZCgnbGlnaHRib3gtb3BlbicpO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKGUua2V5ID09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgZGlzbWlzc0xpZ2h0Ym94KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdzYXAuZnJvbVRvKGxpZ2h0Ym94Rm9ybSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjE1XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc21pc3NMaWdodGJveCgpIHtcbiAgICAgICAgZnMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlnaHRib3hGb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHRib3gtb3BlbicpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnV2Vic2l0ZSBkZXZlbG9wbWVudCBieSB2YW5lc3NhcnVzdS5jb20nKVxufVxuXG4oKSk7XG4iLCJjb25zdCBjdXN0b21MaWdodGJveCA9IChmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVnaXN0ZXItbGluaycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBsYXVuY2hMaWdodGJveCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlnaHRib3gtZGlzbWlzcycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkaXNtaXNzTGlnaHRib3goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsYXVuY2hMaWdodGJveCgpIHtcbiAgICAgICAgdmFyIGxpZ2h0Ym94Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaWdodGJveEZvcm0nKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCFsaWdodGJveEZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIGxpZ2h0Ym94Rm9ybS5jbGFzc0xpc3QuYWRkKCdsaWdodGJveC1vcGVuJyk7XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYoZS5rZXkgPT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBkaXNtaXNzTGlnaHRib3goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ3NhcC5mcm9tVG8obGlnaHRib3hGb3JtLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMTVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzbWlzc0xpZ2h0Ym94KCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlnaHRib3hGb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHRib3gtb3BlbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21MaWdodGJveDsiLCJjb25zdCBmb3JtU3R5bGluZyA9IChmdW5jdGlvbiAoKSB7XG5cbi8vICAgICBmdW5jdGlvbiBkcm9wZG93bigpIHtcbi8vICAgICAgICAgdmFyIHNlbGVjdE5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndwZm9ybXMtZmllbGQtc2VsZWN0IHNlbGVjdCcpO1xuICAgICAgICBcbi8vICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHNlbGVjdE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICAvLyBydW4gZm9yIGVhY2ggc2VsZWN0IG5vZGVcbi8vICAgICAgICAgICAgIHZhciBjdXJyZW50U2VsZWN0ID0gc2VsZWN0Tm9kZXNbaV07XG4vLyAgICAgICAgICAgICB2YXIgbGlNYXJrdXAgPSAnJztcbi8vICAgICAgICAgICAgIHZhciBvcHRpb25zID0gc2VsZWN0Tm9kZXNbaV0ub3B0aW9ucztcbi8vICAgICAgICAgICAgIHZhciBjdXJyZW50U2VsZWN0aW9uVGV4dCA9IGN1cnJlbnRTZWxlY3Qub3B0aW9uc1tzZWxlY3ROb2Rlc1tpXS5zZWxlY3RlZEluZGV4XS50ZXh0O1xuXG4vLyAgICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgb3B0aW9ucy5sZW5ndGg7IGorKykge1xuLy8gICAgICAgICAgICAgICAgIHZhciBpdGVtID0gJzxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj48YSBocmVmPVwiI1wiZGF0YS1kZD1cIicrY3VycmVudFNlbGVjdC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSsnXCIgZGF0YS12YWx1ZT1cIicrb3B0aW9uc1tqXS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykrJ1wiPicrb3B0aW9uc1tqXS5pbm5lckhUTUwrJzwvYT48L2xpPic7XG4vLyAgICAgICAgICAgICAgICAgbGlNYXJrdXAgKz0gaXRlbTtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cImN1c3RvbS1kcm9wZG93blwiPjxwIGNsYXNzPVwic2VsZWN0ZWQtb3B0aW9uXCI+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+JytjdXJyZW50U2VsZWN0aW9uVGV4dCsnPC9zcGFuPjxzcGFuIGNsYXNzPVwiYXJyb3dcIj48L3NwYW4+PC9wPjx1bCBjbGFzcz1cImRkLWNvbnRhaW5lclwiPicrbGlNYXJrdXArJzwvdWw+PC9kaXY+Jztcbi8vICAgICAgICAgICAgIHNlbGVjdE5vZGVzW2ldLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBodG1sKTsgXG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWRyb3Bkb3duIC5zZWxlY3RlZC1vcHRpb24nKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4vLyAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Ecm9wZG93bik7XG4vLyAgICAgICAgIH0pXG5cbi8vICAgICAgICAgLy8gY2xpY2sgb24gZHJvcGRvd24gZWxlbWVudFxuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24taXRlbSBhJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuLy8gICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgICAgIHZhciBmaW5kU2VsZWN0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGQnKTtcbi8vICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK2ZpbmRTZWxlY3QpO1xuLy8gICAgICAgICAgICAgICAgIHVwZGF0ZU9yaWdpbmFsU2VsZWN0KHRoaXMsIG9yaWdpbmFsU2VsZWN0KTtcbi8vICAgICAgICAgICAgICAgICB1cGRhdGVMYWJlbCh0aGlzLCBvcmlnaW5hbFNlbGVjdCk7XG4vLyAgICAgICAgICAgICAgICAgY2xvc2VEcm9wZG93bigpO1xuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgfSk7ICAgICAgICBcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiB1cGRhdGVMYWJlbChjbGlja2VkRWwsIG9yaWdpbmFsU2VsZWN0KSB7XG4vLyAgICAgICAgIHZhciBsYWJlbFRleHROb2RlID0gb3JpZ2luYWxTZWxlY3QubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1vcHRpb24gLnRleHQnKTtcbi8vICAgICAgICAgbGFiZWxUZXh0Tm9kZS5pbm5lckhUTUwgPSBjbGlja2VkRWwuaW5uZXJIVE1MO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIHVwZGF0ZU9yaWdpbmFsU2VsZWN0KGNsaWNrZWRFbCwgb3JpZ2luYWxTZWxlY3QpIHtcbi8vICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgIGlmKG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpID09PSBjbGlja2VkRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykpIHtcbi8vICAgICAgICAgICAgICAgICBvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gY2xvc2VEcm9wZG93bigpIHtcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwuZGQtY29udGFpbmVyJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuLy8gICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZGQtY2xvc2VkJyk7XG4vLyAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdkZC1vcGVuJyk7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gb3BlbkRyb3Bkb3duKCkge1xuLy8gICAgICAgICB0aGlzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdkZC1vcGVuJyk7XG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gaW5pdCgpIHtcbi8vICAgICAgICAgZHJvcGRvd24oKTtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBpbml0OiBpbml0LFxuLy8gICAgICAgICBjbG9zZURyb3Bkb3duOiBjbG9zZURyb3Bkb3duXG4vLyAgICAgfVxuLy8gfSk7XG5cblxuXG5cblxuZnVuY3Rpb24gZHJvcGRvd24oKSB7XG4gICAgdmFyIHNlbGVjdE5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XG5cbiAgICBpZighc2VsZWN0Tm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHNlbGVjdE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIHJ1biBmb3IgZWFjaCBzZWxlY3Qgbm9kZVxuICAgICAgICB2YXIgY3VycmVudFNlbGVjdCA9IHNlbGVjdE5vZGVzW2ldO1xuICAgICAgICB2YXIgbGlNYXJrdXAgPSAnJztcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBzZWxlY3ROb2Rlc1tpXS5vcHRpb25zO1xuICAgICAgICB2YXIgY3VycmVudFNlbGVjdGlvblRleHQgPSBjdXJyZW50U2VsZWN0Lm9wdGlvbnNbc2VsZWN0Tm9kZXNbaV0uc2VsZWN0ZWRJbmRleF0udGV4dDtcblxuICAgICAgICBpZihjdXJyZW50U2VsZWN0Lm9wdGlvbnNbc2VsZWN0Tm9kZXNbaV0uc2VsZWN0ZWRJbmRleF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdlbXB0eScpKSB7XG4gICAgICAgICAgICBjdXJyZW50U2VsZWN0aW9uVGV4dCA9ICcnO1xuICAgIH1cblxuICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgb3B0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdmFyIGFkZEVtcHlDbGFzcyA9IG9wdGlvbnNbal0uY2xhc3NOYW1lID09PSAnZW1wdHknID8gJ2VtcHR5JyA6ICcnO1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSAnPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbSAnICthZGRFbXB5Q2xhc3MrICdcIj48YSB0YWJpbmRleD1cIjBcIiBocmVmPVwiI1wiZGF0YS1kZD1cIicrY3VycmVudFNlbGVjdC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSsnXCIgZGF0YS12YWx1ZT1cIicrb3B0aW9uc1tqXS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykrJ1wiPicrb3B0aW9uc1tqXS5pbm5lckhUTUwrJzwvYT48L2xpPic7XG4gICAgICAgICAgICBsaU1hcmt1cCArPSBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cImN1c3RvbS1kcm9wZG93blwiPjxwIGNsYXNzPVwic2VsZWN0ZWQtb3B0aW9uXCI+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+JytjdXJyZW50U2VsZWN0aW9uVGV4dCsnPC9zcGFuPjxzcGFuIGNsYXNzPVwiYXJyb3dcIj48L3NwYW4+PC9wPjx1bCBjbGFzcz1cImRkLWNvbnRhaW5lclwiPicrbGlNYXJrdXArJzwvdWw+PC9kaXY+JztcbiAgICAgICAgc2VsZWN0Tm9kZXNbaV0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGh0bWwpOyBcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWRyb3Bkb3duIC5zZWxlY3RlZC1vcHRpb24nKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkRyb3Bkb3duKTtcbiAgICB9KVxuXG4gICAgLy8gY2xpY2sgb24gZHJvcGRvd24gZWxlbWVudFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi1pdGVtIGEnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG5cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgZmluZFNlbGVjdCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWRkJyk7XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK2ZpbmRTZWxlY3QpO1xuICAgICAgICAgICAgdXBkYXRlT3JpZ2luYWxTZWxlY3QodGhpcywgb3JpZ2luYWxTZWxlY3QpO1xuICAgICAgICAgICAgdXBkYXRlTGFiZWwodGhpcywgb3JpZ2luYWxTZWxlY3QpO1xuICAgICAgICAgICAgY2xvc2VEcm9wZG93bigpO1xuICAgICAgICB9KVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMYWJlbChjbGlja2VkRWwsIG9yaWdpbmFsU2VsZWN0KSB7ICAgICAgICBcbiAgICB2YXIgbGFiZWxUZXh0Tm9kZSA9IG9yaWdpbmFsU2VsZWN0Lm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtb3B0aW9uIC50ZXh0Jyk7XG4gICAgbGFiZWxUZXh0Tm9kZS5pbm5lckhUTUwgPSBjbGlja2VkRWwuaW5uZXJIVE1MO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVPcmlnaW5hbFNlbGVjdChjbGlja2VkRWwsIG9yaWdpbmFsU2VsZWN0KSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYob3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgPT09IGNsaWNrZWRFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSkge1xuICAgICAgICAgICAgb3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VEcm9wZG93bigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bC5kZC1jb250YWluZXInKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2RkLWNsb3NlZCcpO1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdkZC1vcGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tGb3JPdXRzaWRlQ2xpY2spO1xuICAgICAgICB2YXIgZGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1kcm9wZG93biAuc2VsZWN0ZWQtb3B0aW9uJyk7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpIDwgZGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZURyb3Bkb3duKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG9wZW5Ecm9wZG93bigpIHtcbiAgICB0aGlzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdkZC1vcGVuJyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0Zvck91dHNpZGVDbGljayk7XG4gICAgdmFyIGRkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tZHJvcGRvd24gLnNlbGVjdGVkLW9wdGlvbicpO1xuICAgICAgICBmb3IodmFyIGk9MDsgaSA8IGRkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VEcm9wZG93bik7XG4gICAgICAgIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JPdXRzaWRlQ2xpY2soZSkge1xuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsLmRkLWNvbnRhaW5lci5kZC1vcGVuJykpIHtcbiAgICAgICAgaWYoIShlLnRhcmdldC50YWdOYW1lID09J0EnIHx8IGUudGFyZ2V0LnRhZ05hbWUgPT0nU1BBTicgfHwgZS50YXJnZXQudGFnTmFtZSA9PSdQJykpIHtcbiAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxucmV0dXJuIHtcbiAgICBpbml0OiBkcm9wZG93bixcbiAgICBjbG9zZURyb3Bkb3duOiBjbG9zZURyb3Bkb3duXG59XG59KTsgXG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1TdHlsaW5nOyJdLCJzb3VyY2VSb290IjoiIn0=