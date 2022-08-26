(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    [382], {
        1454: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(378);
            var prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
            var PowrLogo = function PowrLogo(props) {
                var _ref = props || {},
                    url = _ref.url,
                    white = _ref.white,
                    small = _ref.small,
                    svgStyle = _ref.svgStyle,
                    wrapperStyle = _ref.wrapperStyle;
                var textColor = white ? '#FFFFFF' : '#354051';
                var iconColor = white ? '#FFFFFF' : '#3B8CFF';
                var logoSVG = function logoSVG() {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        style: wrapperStyle
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
                        style: svgStyle,
                        width: small ? 18 : 102,
                        height: "24",
                        viewBox: small ? '0 0 18 24' : '0 0 102 24',
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, !small && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M37.8683 8.83845C37.8683 6.9923 37.2683 5.56153 36.0453 4.56922C34.8453 3.55384 33.2991 3.04614 31.4068 3.04614H24.6914V21.1154H28.4299V14.7461H31.2683C33.2529 14.7461 34.8453 14.2385 36.0453 13.2461C37.2683 12.2308 37.8683 10.7538 37.8683 8.83845ZM34.1068 8.93076C34.1068 10.5 32.7683 11.2615 31.1068 11.2615H28.4299V6.57691H31.0837C32.8145 6.57691 34.1068 7.2923 34.1068 8.93076Z",
                        fill: textColor
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M39.7383 12.0924C39.7383 14.7001 40.6383 16.8924 42.4614 18.6924C44.2844 20.4924 46.4767 21.3924 49.0844 21.3924C51.6921 21.3924 53.9075 20.4924 55.7306 18.6693C57.5767 16.8462 58.4998 14.6077 58.4998 12.0001C58.4998 9.41544 57.5998 7.22313 55.7767 5.44621C53.9767 3.66929 51.7844 2.76929 49.1767 2.76929C46.5691 2.76929 44.3537 3.66929 42.5075 5.49236C40.6614 7.31544 39.7383 9.50775 39.7383 12.0924ZM45.1844 8.0539C46.2691 6.94621 47.5844 6.39236 49.1306 6.39236C50.6767 6.39236 51.9921 6.94621 53.0767 8.0539C54.1614 9.16159 54.6921 10.5001 54.6921 12.0693C54.6921 13.6385 54.1614 14.977 53.0767 16.1077C51.9921 17.2154 50.6767 17.7693 49.1306 17.7693C47.5844 17.7693 46.2691 17.2154 45.1844 16.1077C44.0998 14.977 43.5691 13.6385 43.5691 12.0693C43.5691 10.5001 44.0998 9.16159 45.1844 8.0539Z",
                        fill: textColor
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M67.8914 21.1154L71.8376 8.00768H71.8837L75.8068 21.1154H79.8453L85.1991 3.04614H81.3453L77.7914 15.9692L73.8914 3.04614H69.8991L65.9991 15.8769L62.5607 3.04614H58.5684L63.8761 21.1154H67.8914Z",
                        fill: textColor
                    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        d: "M101.353 21.0692L97.2686 14.0077C99.7379 13.1077 100.984 11.3538 100.984 8.72308C100.984 6.9 100.384 5.49231 99.1609 4.5C97.9609 3.50769 96.4379 3 94.5917 3H87.4609V21.0692H91.1994V14.5846H93.4609L97.1994 21.0692H101.353ZM91.1994 6.53077H94.2917C95.9302 6.53077 97.1994 7.2 97.1994 8.79231C97.1994 10.3615 95.884 11.1231 94.3148 11.1231H91.1994V6.53077Z",
                        fill: textColor
                    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.35724 0.00179725C7.45654 -0.0130465 7.54492 0.0659741 7.54492 0.167998V6.4105C7.54492 6.50419 7.61964 6.58015 7.71181 6.58015H9.53372C9.62589 6.58015 9.70061 6.50419 9.70061 6.4105V0.167998C9.70061 0.0659742 9.78899 -0.0130465 9.88828 0.00179729C14.0505 0.624012 17.2455 4.26895 17.2455 8.67236C17.2455 13.4559 13.4752 17.3443 8.79025 17.435C8.69809 17.4368 8.62276 17.5126 8.62276 17.6063V23.4444C8.62276 23.7567 8.37353 24.0109 8.06649 23.9996C5.27938 23.897 2.68506 23.026 0.482398 21.589C0.176286 21.3892 0 21.0404 0 20.6706V8.89279C0 8.89206 0.000584176 8.89147 0.00130479 8.89147C0.00203794 8.89147 0.00262717 8.89085 0.0026093 8.89011C0.00087312 8.81774 0 8.74515 0 8.67236C0 4.26895 3.19498 0.624012 7.35724 0.00179725ZM5.38923 3.27362C5.38923 3.14302 5.25049 3.06205 5.14221 3.13233C4.74831 3.38799 4.3819 3.6869 4.04985 4.0244C3.44933 4.63478 2.97297 5.3594 2.64797 6.1569C2.32297 6.9544 2.15569 7.80915 2.15569 8.67236C2.15569 9.53557 2.32297 10.3903 2.64797 11.1878C2.97297 11.9853 3.44933 12.7099 4.04985 13.3203C4.65037 13.9307 5.3633 14.4149 6.14792 14.7452C6.93254 15.0756 7.77349 15.2456 8.62276 15.2456C9.47203 15.2456 10.313 15.0756 11.0976 14.7452C11.8822 14.4149 12.5951 13.9307 13.1957 13.3203C13.7962 12.71 14.2726 11.9853 14.5976 11.1878C14.9226 10.3903 15.0898 9.53557 15.0898 8.67236C15.0898 7.80916 14.9226 6.9544 14.5976 6.1569C14.2726 5.3594 13.7962 4.63478 13.1957 4.0244C12.8636 3.6869 12.4972 3.38799 12.1033 3.13233C11.995 3.06205 11.8563 3.14302 11.8563 3.27362V5.70972C11.8563 5.75104 11.8712 5.79086 11.8977 5.82225C12.1926 6.1724 12.4319 6.56821 12.606 6.99539C12.8226 7.52706 12.9341 8.09689 12.9341 8.67236C12.9341 9.24783 12.8226 9.81767 12.606 10.3493C12.3893 10.881 12.0717 11.3641 11.6714 11.771C11.271 12.1779 10.7957 12.5007 10.2727 12.7209C9.74957 12.9412 9.18894 13.0545 8.62276 13.0545C8.05658 13.0545 7.49595 12.9412 6.97287 12.7209C6.44979 12.5007 5.9745 12.1779 5.57415 11.771C5.17381 11.3641 4.85623 10.881 4.63956 10.3493C4.4229 9.81767 4.31138 9.24783 4.31138 8.67236C4.31138 8.09689 4.4229 7.52705 4.63957 6.99539C4.81365 6.56821 5.05288 6.17239 5.34784 5.82225C5.37429 5.79086 5.38923 5.75104 5.38923 5.70972V3.27362Z",
                        fill: iconColor
                    })));
                };
                var logo = logoSVG();
                if (url) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                    href: url
                }, logo);
                return logo;
            };
            PowrLogo.defaultProps = {
                svgStyle: {},
                wrapperStyle: {
                    display: 'flex'
                }
            };
            PowrLogo.propTypes = {
                url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                white: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
                small: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
            };
            __webpack_exports__["default"] = (PowrLogo);
        }),
        3731: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(378);
            var prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
            var react_signature_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3732);
            var react_signature_canvas__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(react_signature_canvas__WEBPACK_IMPORTED_MODULE_2__);

            function _typeof(obj) {
                "@babel/helpers - typeof";
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                } else {
                    _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                }
                return _typeof(obj);
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }

            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                if (staticProps) _defineProperties(Constructor, staticProps);
                return Constructor;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) _setPrototypeOf(subClass, superClass);
            }

            function _setPrototypeOf(o, p) {
                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                    o.__proto__ = p;
                    return o;
                };
                return _setPrototypeOf(o, p);
            }

            function _createSuper(Derived) {
                var hasNativeReflectConstruct = _isNativeReflectConstruct();
                return function _createSuperInternal() {
                    var Super = _getPrototypeOf(Derived),
                        result;
                    if (hasNativeReflectConstruct) {
                        var NewTarget = _getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                    } else {
                        result = Super.apply(this, arguments);
                    }
                    return _possibleConstructorReturn(this, result);
                };
            }

            function _possibleConstructorReturn(self, call) {
                if (call && (_typeof(call) === "object" || typeof call === "function")) {
                    return call;
                }
                return _assertThisInitialized(self);
            }

            function _assertThisInitialized(self) {
                if (self === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return self;
            }

            function _isNativeReflectConstruct() {
                if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if (typeof Proxy === "function") return true;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                    return true;
                } catch (e) {
                    return false;
                }
            }

            function _getPrototypeOf(o) {
                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                };
                return _getPrototypeOf(o);
            }
            var PowrSignature = function(_React$Component) {
                _inherits(PowrSignature, _React$Component);
                var _super = _createSuper(PowrSignature);

                function PowrSignature(props) {
                    var _this;
                    _classCallCheck(this, PowrSignature);
                    _this = _super.call(this, props);
                    _this.signaturePad = {};
                    _this.inputRef = null;
                    _this.drawCursor = function(container) {
                        var canvas = document.createElement('canvas');
                        canvas.width = 20;
                        canvas.height = 20;
                        var ctx = canvas.getContext('2d');
                        ctx.fillStyle = '#000';
                        ctx.font = '12px FontAwesome';
                        ctx.textAlign = 'bottom';
                        ctx.textBaseline = 'middle';
                        ctx.fillText("\uF040", 0, 7);
                        var dataURL = canvas.toDataURL('image/png');
                        container.style.cursor = "url(".concat(dataURL, ") 0 17, auto");
                    };
                    _this.dispatchEvent = function() {
                        var event = new Event('change', {
                            bubbles: true
                        });
                        _this.inputRef.dispatchEvent(event);
                    };
                    _this.onClear = function() {
                        _this.setState({
                            signature: '',
                            dirty: false
                        });
                        _this.signaturePad.clear();
                    };
                    _this.onDrawEnd = function() {
                        _this.setState({
                            signature: _this.signaturePad.toDataURL()
                        }, function() {
                            return _this.dispatchEvent();
                        });
                    };
                    _this.onDrawBegin = function() {
                        _this.setState({
                            dirty: true
                        });
                    };
                    _this.state = {
                        signature: '',
                        dirty: false
                    };
                    _this.signatureElement = _.findWhere(window.APP_MODEL.attributes.locals.data, {
                        idx: props.id
                    });
                    return _this;
                }
                _createClass(PowrSignature, [{
                    key: "componentDidMount",
                    value: function componentDidMount() {
                        var _this2 = this;
                        this.setState({
                            width: this.parentWidth
                        }, function() {
                            var containers = document.querySelectorAll('.powr-signature__canvas');
                            if (containers.length) containers.forEach(function(container) {
                                return _this2.drawCursor(container);
                            });
                        });
                    }
                }, {
                    key: "render",
                    value: function render() {
                        var _this3 = this;
                        var id = this.props.id;
                        var _this$state = this.state,
                            width = _this$state.width,
                            signature = _this$state.signature,
                            dirty = _this$state.dirty;
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                            className: "powr-signature",
                            id: "signature-".concat(id)
                        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
                            className: "fitText"
                        }, this.signatureElement.required && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                            className: "required"
                        }, "*"), this.signatureElement.label), width && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                            className: "powr-signature__container"
                        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_signature_canvas__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            minDistance: 0,
                            penColor: this.signatureElement.signatureInkColor,
                            canvasProps: {
                                width: width,
                                height: 125,
                                className: 'powr-signature__canvas'
                            },
                            ref: function ref(_ref) {
                                return _this3.signaturePad = _ref;
                            },
                            onEnd: this.onDrawEnd,
                            onBegin: this.onDrawBegin,
                            backgroundColor: this.signatureElement.signatureBackgroundColor || '#fff'
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                            className: "fa fa-times-circle powr-signature__clear ".concat(!dirty && 'hid'),
                            style: {
                                color: this.signatureElement.signatureInkColor
                            },
                            onClick: this.onClear
                        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "signature",
                            id: this.props.id,
                            defaultValue: signature,
                            name: id,
                            "aria-describedby": "".concat(id, "_errors"),
                            className: "hid  ".concat(this.signatureElement.required && 'hiddenRequired'),
                            ref: function ref(input) {
                                return _this3.inputRef = input;
                            }
                        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                            className: "powr-signature__desc"
                        }, this.signatureElement.signature_instructions));
                    }
                }, {
                    key: "parentWidth",
                    get: function get() {
                        var parent = document.getElementById(this.signatureElement.idx);
                        var maxWidth = document.querySelector('.js-formBuilder-toggle').offsetWidth;
                        return parent.parentElement.offsetWidth > maxWidth ? maxWidth : parent.parentElement.offsetWidth;
                    }
                }]);
                return PowrSignature;
            }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
            PowrSignature.propTypes = {
                id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
            };
            __webpack_exports__["default"] = (PowrSignature);
        }),
        3735: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(378);
            var prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
            var flatpickr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3351);
            var flatpickr__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_2__);

            function _typeof(obj) {
                "@babel/helpers - typeof";
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                } else {
                    _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                }
                return _typeof(obj);
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }

            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                if (staticProps) _defineProperties(Constructor, staticProps);
                return Constructor;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) _setPrototypeOf(subClass, superClass);
            }

            function _setPrototypeOf(o, p) {
                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                    o.__proto__ = p;
                    return o;
                };
                return _setPrototypeOf(o, p);
            }

            function _createSuper(Derived) {
                var hasNativeReflectConstruct = _isNativeReflectConstruct();
                return function _createSuperInternal() {
                    var Super = _getPrototypeOf(Derived),
                        result;
                    if (hasNativeReflectConstruct) {
                        var NewTarget = _getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                    } else {
                        result = Super.apply(this, arguments);
                    }
                    return _possibleConstructorReturn(this, result);
                };
            }

            function _possibleConstructorReturn(self, call) {
                if (call && (_typeof(call) === "object" || typeof call === "function")) {
                    return call;
                }
                return _assertThisInitialized(self);
            }

            function _assertThisInitialized(self) {
                if (self === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return self;
            }

            function _isNativeReflectConstruct() {
                if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if (typeof Proxy === "function") return true;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                    return true;
                } catch (e) {
                    return false;
                }
            }

            function _getPrototypeOf(o) {
                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                };
                return _getPrototypeOf(o);
            }
            var PowrDateTimePicker = function(_React$Component) {
                _inherits(PowrDateTimePicker, _React$Component);
                var _super = _createSuper(PowrDateTimePicker);

                function PowrDateTimePicker(props) {
                    var _this;
                    _classCallCheck(this, PowrDateTimePicker);
                    _this = _super.call(this, props);
                    _this.onOpen = function() {
                        _this.pickerInstance.config.position = _this.pickerPosition;
                        if (_this.shouldAdjustFormHeight) {
                            _this.adjustFormHeightByPickerSize();
                        }
                    };
                    _this.onClose = function() {
                        if (_this.initialFormHeight) {
                            _this.bringBackInitialFormHeight();
                        }
                    };
                    _this.onValueUpdate = function() {
                        if (_this.needCleanPickerValue) {
                            _this.needCleanPickerValue = false;
                            _this.pickerInstance.clear();
                        }
                    };
                    _this.onPickerInputKeyUp = function(event) {
                        if (['Backspace', 'Delete'].includes(event.key) && _this.isInputValueEmpty) {
                            _this.needCleanPickerValue = true;
                        }
                    };
                    _this.renderLabel = function() {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
                            className: "fitText for-input ".concat(_this.pickerElement.value ? 'label-up' : '')
                        }, _this.state.required && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                            className: "required"
                        }, "*"), _this.state.label);
                    };
                    _this.render = function() {
                        var id = _this.props.id;
                        var required = _this.state.required;
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, _this.renderLabel(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                            className: "flatpickr",
                            ref: _this.flatPickrRef
                        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "date",
                            placeholder: "Select Date...",
                            id: id,
                            "data-input": true,
                            required: required
                        })));
                    };
                    _this.flatPickrRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
                    _this.state = {
                        label: '',
                        required: false
                    };
                    _this.pickerElement = _.findWhere(window.APP_MODEL.attributes.locals.data, {
                        idx: _this.props.id
                    });
                    var pickerHeights = {
                        both: 336,
                        date: 296,
                        time: 40
                    };
                    _this.pickerHeight = pickerHeights[_this.pickerElement.displayType];
                    return _this;
                }
                _createClass(PowrDateTimePicker, [{
                    key: "componentDidMount",
                    value: function componentDidMount() {
                        this.renderThirdPartyPicker();
                        this.props.addRequiredHandler(this.props.id);
                    }
                }, {
                    key: "bringBackInitialFormHeight",
                    value: function bringBackInitialFormHeight() {
                        var dateField = document.getElementById(this.props.id);
                        dateField.offsetParent.style.height = "".concat(this.initialFormHeight, "px");
                    }
                }, {
                    key: "adjustFormHeightByPickerSize",
                    value: function adjustFormHeightByPickerSize() {
                        var gap = 10;
                        var dateField = document.getElementById(this.props.id);
                        var dateFieldTop = dateField.offsetTop - dateField.scrollTop + dateField.clientTop;
                        var adjustedHeight = dateFieldTop + dateField.clientHeight + this.pickerHeight + gap;
                        this.initialFormHeight = dateField.offsetParent.offsetHeight;
                        dateField.offsetParent.style.height = "".concat(adjustedHeight, "px");
                    }
                }, {
                    key: "renderThirdPartyPicker",
                    value: function renderThirdPartyPicker() {
                        this.pickerInstance = flatpickr__WEBPACK_IMPORTED_MODULE_2___default()(this.flatPickrRef.current, this.getThirdPartyPickerConfig(this.pickerElement));
                        this.pickerInstance.config.onValueUpdate.push(this.onValueUpdate);
                        this.pickerInstance.config.onOpen.push(this.onOpen);
                        this.pickerInstance.config.onClose.push(this.onClose);
                        document.getElementById(this.props.id).onkeyup = this.onPickerInputKeyUp;
                        this.setState({
                            label: this.pickerElement.label,
                            required: this.pickerElement.required
                        });
                        if (this.pickerElement.value) {
                            this.pickerInstance.setDate(this.pickerElement.value);
                        }
                    }
                }, {
                    key: "getThirdPartyPickerConfig",
                    value: function getThirdPartyPickerConfig(settings) {
                        var currentDate = new Date();
                        var config = {
                            altInput: true,
                            wrap: true,
                            defaultHour: currentDate.getHours(),
                            defaultMinute: currentDate.getMinutes(),
                            time_24hr: settings.istwentyfour,
                            disableMobile: true
                        };
                        var dateFormat = settings.dateFormat === 'DD-MM-YYYY' ? 'd-m-Y' : 'm-d-Y';
                        var timeFormat = config.time_24hr ? 'H:i' : 'h:i K';
                        switch (settings.displayType) {
                            case 'date':
                                config.dateFormat = 'Y-m-d';
                                config.altFormat = dateFormat;
                                break;
                            case 'time':
                                config.dateFormat = 'H:i:S';
                                config.altFormat = timeFormat;
                                config.allowInput = true;
                                config.enableTime = config.noCalendar = true;
                                break;
                            case 'both':
                                config.dateFormat = 'Y-m-d H:i:S';
                                config.altFormat = dateFormat + ' ' + timeFormat;
                                config.enableTime = true;
                                break;
                        }
                        return config;
                    }
                }, {
                    key: "shouldAdjustFormHeight",
                    get: function get() {
                        return !window.isMobile() && !this.pickerFitsToSpaceBelow && !this.pickerFitsToSpaceAbove;
                    }
                }, {
                    key: "initialFormHeight",
                    set: function set(height) {
                        this.formHeight = height;
                    },
                    get: function get() {
                        return this.formHeight;
                    }
                }, {
                    key: "isInputValueEmpty",
                    get: function get() {
                        return !document.getElementById(this.props.id).getElementsByClassName('form-control')[0].value;
                    }
                }, {
                    key: "pickerPosition",
                    get: function get() {
                        return window.isMobile() ? 'auto' : this.pickerFitsToSpaceAbove && !this.pickerFitsToSpaceBelow ? 'above' : 'below';
                    }
                }, {
                    key: "pickerFitsToSpaceBelow",
                    get: function get() {
                        var dateField = document.getElementById(this.props.id);
                        var dateFieldTop = dateField.offsetTop - dateField.scrollTop + dateField.clientTop;
                        return dateField.offsetParent.clientHeight - dateFieldTop - dateField.clientHeight >= this.pickerHeight;
                    }
                }, {
                    key: "pickerFitsToSpaceAbove",
                    get: function get() {
                        var dateField = document.getElementById(this.props.id);
                        var dateFieldTop = dateField.offsetTop - dateField.scrollTop + dateField.clientTop;
                        return dateFieldTop >= this.pickerHeight;
                    }
                }]);
                return PowrDateTimePicker;
            }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
            PowrDateTimePicker.propTypes = {
                id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
                addRequiredHandler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
            };
            __webpack_exports__["default"] = (PowrDateTimePicker);
        }),
        3736: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(378);
            var prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
            var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1430);
            var react_slick__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
            var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(790);
            var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
            var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(791);
            var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
            var _modules_react_components_powr_social_feed_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3737);

            function _typeof(obj) {
                "@babel/helpers - typeof";
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                } else {
                    _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                }
                return _typeof(obj);
            }

            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    if (enumerableOnly) symbols = symbols.filter(function(sym) {
                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                    });
                    keys.push.apply(keys, symbols);
                }
                return keys;
            }

            function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i] != null ? arguments[i] : {};
                    if (i % 2) {
                        ownKeys(Object(source), true).forEach(function(key) {
                            _defineProperty(target, key, source[key]);
                        });
                    } else if (Object.getOwnPropertyDescriptors) {
                        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                    } else {
                        ownKeys(Object(source)).forEach(function(key) {
                            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                        });
                    }
                }
                return target;
            }

            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }

            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                if (staticProps) _defineProperties(Constructor, staticProps);
                return Constructor;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) _setPrototypeOf(subClass, superClass);
            }

            function _setPrototypeOf(o, p) {
                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                    o.__proto__ = p;
                    return o;
                };
                return _setPrototypeOf(o, p);
            }

            function _createSuper(Derived) {
                var hasNativeReflectConstruct = _isNativeReflectConstruct();
                return function _createSuperInternal() {
                    var Super = _getPrototypeOf(Derived),
                        result;
                    if (hasNativeReflectConstruct) {
                        var NewTarget = _getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                    } else {
                        result = Super.apply(this, arguments);
                    }
                    return _possibleConstructorReturn(this, result);
                };
            }

            function _possibleConstructorReturn(self, call) {
                if (call && (_typeof(call) === "object" || typeof call === "function")) {
                    return call;
                }
                return _assertThisInitialized(self);
            }

            function _assertThisInitialized(self) {
                if (self === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return self;
            }

            function _isNativeReflectConstruct() {
                if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if (typeof Proxy === "function") return true;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                    return true;
                } catch (e) {
                    return false;
                }
            }

            function _getPrototypeOf(o) {
                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                };
                return _getPrototypeOf(o);
            }
            var Arrow = function Arrow(_ref) {
                var onClick = _ref.onClick,
                    side = _ref.side,
                    hovered = _ref.hovered;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "".concat(side, "Side"),
                    onClick: onClick
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                    className: "fal fa-chevron-".concat(side, " arrow"),
                    style: {
                        opacity: hovered ? 1 : 0.5
                    }
                }));
            };
            Arrow.propTypes = {
                onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
                side: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                hovered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
            };
            var PowrSocialFeedSlider = function(_React$Component) {
                _inherits(PowrSocialFeedSlider, _React$Component);
                var _super = _createSuper(PowrSocialFeedSlider);

                function PowrSocialFeedSlider(props) {
                    var _this;
                    _classCallCheck(this, PowrSocialFeedSlider);
                    _this = _super.call(this, props);
                    _this.onSliderMouseEnter = function() {
                        _this.setState({
                            hovered: true
                        });
                    };
                    _this.onSliderMouseLeave = function() {
                        _this.setState({
                            hovered: false
                        });
                    };
                    _this.state = {
                        hovered: false,
                        clickable: true
                    };
                    return _this;
                }
                _createClass(PowrSocialFeedSlider, [{
                    key: "render",
                    value: function render() {
                        var _this2 = this;
                        var _this$props$modelAttr = this.props.modelAttributes,
                            universalPosts = _this$props$modelAttr.locals.universalPosts,
                            postSize = _this$props$modelAttr.postSize,
                            postsPerRow = _this$props$modelAttr.postsPerRow,
                            columnWidth = _this$props$modelAttr.columnWidth;
                        var attributes = _.omit(this.props.modelAttributes, ['followingData', 'approvalData', 'locals', 'passwords']);
                        var postsPerRowForSlider;
                        if (postSize === 'postWidth') {
                            var postWidth = Math.max(Math.abs(parseInt(columnWidth)), 100);
                            var _postsPerRow = parseInt($('#appView').width() / postWidth);
                            postsPerRowForSlider = Math.min(_postsPerRow, universalPosts.length);
                        } else {
                            postsPerRowForSlider = Math.min(Number(postsPerRow), universalPosts.length);
                        }
                        var mobileSettings = {
                            centerMode: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            className: 'center'
                        };
                        var applyMobileSettings = $('#appView').width() <= 360 ? mobileSettings : {};
                        var settings = _objectSpread(_objectSpread({
                            centerPadding: '60px',
                            dots: true,
                            infinite: true,
                            speed: 500,
                            slidesToShow: postsPerRowForSlider,
                            slidesToScroll: postsPerRowForSlider,
                            initialSlide: 1
                        }, applyMobileSettings), {}, {
                            nextArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Arrow, {
                                side: "right",
                                hovered: this.state.hovered
                            }),
                            prevArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Arrow, {
                                side: "left",
                                hovered: this.state.hovered
                            }),
                            beforeChange: function beforeChange() {
                                _this2.props.scrollCallback(true);
                                _this2.setState({
                                    clickable: false
                                });
                            },
                            afterChange: function afterChange() {
                                _this2.props.scrollCallback(false);
                                _this2.setState({
                                    clickable: true
                                });
                            },
                            responsive: [{
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                    infinite: true,
                                    dots: true
                                }
                            }, {
                                breakpoint: 480,
                                settings: mobileSettings
                            }]
                        });
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                            onMouseEnter: this.onSliderMouseEnter,
                            onMouseLeave: this.onSliderMouseLeave
                        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, settings, universalPosts.map(function(post, index) {
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_react_components_powr_social_feed_post__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                post: post,
                                key: post.originalLink,
                                modelAttributes: attributes,
                                index: index,
                                onClick: function onClick(index) {
                                    var _this2$props$onClick, _this2$props;
                                    return _this2.state.clickable && ((_this2$props$onClick = (_this2$props = _this2.props).onClick) === null || _this2$props$onClick === void 0 ? void 0 : _this2$props$onClick.call(_this2$props, index));
                                }
                            });
                        })));
                    }
                }]);
                return PowrSocialFeedSlider;
            }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
            __webpack_exports__["default"] = (PowrSocialFeedSlider);
            PowrSocialFeedSlider.propTypes = {
                modelAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
                    locals: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
                        universalPosts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
                    }),
                    postsPerRow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                    postSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                    columnWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
                }),
                width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
                scrollCallback: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
                onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
            };
        }),
        3737: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(378);
            var prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
            var POST_PROP_TYPE = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
                video: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
                    valid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
                    videoProvider: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                    videoId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
                }),
                comments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
                likes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
                username: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                pictures: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
                caption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                originalCaption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                originalLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                shareLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                profilePicture: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                dateFetched: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
                tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
                style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
            });
            var ITEM_TYPE = {
                attr: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
                post: POST_PROP_TYPE
            };
            var VIDEO_PROVIDER_SRC = {
                youtube: function youtube(index, videoId) {
                    return "//www.youtube.com/embed/".concat(videoId, "?enablejsapi=1&version=3&playerapiid=video_").concat(index, "&rel=0&wmode=opaque");
                },
                vimeo: function vimeo(index, videoId) {
                    return "//player.vimeo.com/video/".concat(videoId, "?api=1&player_id=video_").concat(index);
                },
                dailymotion: function dailymotion(index, videoId) {
                    return "//www.dailymotion.com/embed/video/".concat(videoId);
                }
            };
            var VideoContainer = function VideoContainer(_ref) {
                var videoProvider = _ref.videoProvider,
                    index = _ref.index,
                    videoId = _ref.videoId;
                var src = VIDEO_PROVIDER_SRC[videoProvider](index, videoId);
                var id = "video_".concat(index);
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "videoContainer"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
                    id: id,
                    src: src,
                    className: "video",
                    width: "100%",
                    height: "100%",
                    frameBorder: "0",
                    allowFullScreen: true,
                    webkitallowfullscreen: "true"
                }));
            };
            VideoContainer.propTypes = {
                videoProvider: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                videoId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
            };
            var PictureContainer = function PictureContainer(_ref2) {
                var m = _ref2.attr,
                    p = _ref2.post;
                var caption = m.showCaption && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "captionContainer"
                }, p.caption);
                var likesComments = m.showLikesComments && p.likes != null && p.comments != null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "likesAndComments flex-row justify-content-space-evenly"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                    className: "flex-row justify-content-end align-items-center"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                    className: "fal fa-heart like-icon"
                }), " ", p.likes), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                    className: "flex-row justify-content-start align-items-center"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                    className: "fal fa-comment comment-icon"
                }), " ", p.comments));
                var showCaptionAndLikes = m.showLikesComments && p.likes != null && p.comments != null || m.showCaption && p.caption;
                var captionAndLikes = showCaptionAndLikes && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "hoverEffect text-center centerParent"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "overlayContainer flex-column justify-content-space-evenly"
                }, caption, likesComments));
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "postPicture ".concat(m.specialFX)
                }, captionAndLikes, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "postImgWrapper ".concat(m.imageCrop, "Crop"),
                    style: {
                        backgroundImage: "url(".concat(p.pictures[0], ")")
                    }
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                    className: "postImg",
                    src: p.pictures[0]
                })));
            };
            PictureContainer.propTypes = ITEM_TYPE;
            var BodyContainer = function BodyContainer(_ref3) {
                var m = _ref3.attr,
                    p = _ref3.post;
                var retweet = p.retweet_text && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                    className: "fal fa-retweet"
                }), p.retweet_text);
                var animatedGif = p.media_type === 'animated_gif' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
                    width: "100%",
                    height: "100%",
                    autoPlay: true,
                    loop: true
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
                    src: p.media_gif
                }));
                var video = p.media_type === 'video' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
                    width: "100%",
                    height: "100%",
                    controls: "controls",
                    poster: p.media_url
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
                    src: p.media_video
                }));
                var retweetGif = p.retweet_media_type === 'animated_gif' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
                    width: "100%",
                    height: "100%",
                    autoPlay: true,
                    loop: true
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
                    src: p.retweet_media_gif
                }));
                var retweetVideo = p.retweet_media_type === 'video' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
                    width: "100%",
                    height: "100%",
                    controls: "controls",
                    poster: p.media_url
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
                    src: p.retweet_media_video
                }));
                var noMediaType = !p.media_type && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, retweetGif, retweetVideo);
                var date = p.date && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "postCaptionDate"
                }, m.dateFormat === 'european' ? window.APP_MODEL.euroDate(p.date) : window.displayDate(p.date * 1000));
                var profilePicture = p.profilePicture !== '' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "imageWrapper"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                    className: "profilePicture",
                    src: p.profilePicture
                }));
                var username = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "textWrapper"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "postUsername fitText fitTextNoWrap"
                }, "".concat(p.type === 'Twitter' ? '@' : '').concat(p.username)));
                var footer = m.showFooter && (p.profilePicture || p.username || p.date) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "postFooter fitTextParent"
                }, profilePicture, username);
                var shareOnPinterest = (p.pictures.length > 0 || p.media_image || p.retweet_media_image) && window.sharinator('socialFeed', p, 'pinterest');
                var shareOnTwitter = window.sharinator('socialFeed', p, 'twitter');
                var shareOnFacebook = window.sharinator('socialFeed', p, 'facebook');
                var shareOnTumblr = window.sharinator('socialFeed', p, 'tumblr');
                var shareEmail = window.sharinator('socialFeed', p, 'email');
                var pinterest = shareOnPinterest && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                    className: "shareLink tumblr",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: shareOnTumblr
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                    className: "fal fa-tumblr fa-lg"
                })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                    className: "shareLink pinterest",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: shareOnPinterest
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                    className: "fal fa-pinterest fa-lg"
                })));
                var instagramOrFacebookLink = p.type === 'Instagram' || p.type === 'Facebook' && p.shareLink.indexOf('/videos/') !== -1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                    className: "shareLink fb",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://www.facebook.com/sharer/sharer.php?u=".concat(p.shareLink)
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                    className: "fab fa-facebook-f fa-lg"
                })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                    className: "shareLink fb",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: shareOnFacebook
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                    className: "fab fa-facebook-f fa-lg"
                }));
                var shareable = m.shareable && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "postSocialShare"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                    className: "fal fa-share-alt fa-lg shareableicon"
                }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                    className: "shareLink twitter",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: shareOnTwitter
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                    className: "fab fa-twitter fa-lg"
                })), instagramOrFacebookLink, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                    className: "shareLink mail",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: shareEmail
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                    className: "fal fa-envelope fa-lg"
                })), pinterest);
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "postBody"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "postCaption fitText"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: p.caption
                    }
                }), retweet, animatedGif, video, noMediaType, date), footer, shareable);
            };
            BodyContainer.propTypes = ITEM_TYPE;
            var PowrSocialFeedPost = function PowrSocialFeedPost(_ref4) {
                var m = _ref4.modelAttributes,
                    p = _ref4.post,
                    index = _ref4.index,
                    _onClick = _ref4.onClick;
                var video = p.video && p.video.valid && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VideoContainer, {
                    index: index,
                    videoId: p.video.videoId,
                    videoProvider: p.video.videoProvider
                });
                var postPicture = p.pictures.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PictureContainer, {
                    attr: m,
                    post: p
                });
                var postBody = p.caption.length > 0 && m.showText && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BodyContainer, {
                    attr: m,
                    post: p
                });
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "postItem ".concat(m.backgroundShadow, " ").concat(m.postSameHeight ? 'sameHeight' : ''),
                    "data-link": p.originalLink,
                    "data-type": p.type,
                    onClick: function onClick() {
                        return _onClick === null || _onClick === void 0 ? void 0 : _onClick(index);
                    }
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, video, postPicture, postBody));
            };
            __webpack_exports__["default"] = (PowrSocialFeedPost);
            PowrSocialFeedPost.propTypes = {
                post: POST_PROP_TYPE,
                modelAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
                index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
                onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
            };
        }),
        3738: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return PowrPhoneNumberInput;
            });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(378);
            var prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
            var react_intl_tel_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(630);
            var react_intl_tel_input__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(react_intl_tel_input__WEBPACK_IMPORTED_MODULE_2__);
            var _powr_phone_countries_eng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(632);

            function _slicedToArray(arr, i) {
                return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
            }

            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }

            function _unsupportedIterableToArray(o, minLen) {
                if (!o) return;
                if (typeof o === "string") return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                if (n === "Object" && o.constructor) n = o.constructor.name;
                if (n === "Map" || n === "Set") return Array.from(o);
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
            }

            function _arrayLikeToArray(arr, len) {
                if (len == null || len > arr.length) len = arr.length;
                for (var i = 0, arr2 = new Array(len); i < len; i++) {
                    arr2[i] = arr[i];
                }
                return arr2;
            }

            function _iterableToArrayLimit(arr, i) {
                if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = undefined;
                try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;
                    _e = err;
                } finally {
                    try {
                        if (!_n && _i["return"] != null) _i["return"]();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }

            function _arrayWithHoles(arr) {
                if (Array.isArray(arr)) return arr;
            }

            function PowrPhoneNumberInput(props) {
                var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.status || 'invalid'),
                    _useState2 = _slicedToArray(_useState, 2),
                    status = _useState2[0],
                    setStatus = _useState2[1];
                var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.phoneExtension || ''),
                    _useState4 = _slicedToArray(_useState3, 2),
                    extension = _useState4[0],
                    setExtension = _useState4[1];
                var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.phoneNumber || ''),
                    _useState6 = _slicedToArray(_useState5, 2),
                    phone = _useState6[0],
                    setPhone = _useState6[1];
                var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
                    _useState8 = _slicedToArray(_useState7, 2),
                    isFocused = _useState8[0],
                    toggleFocus = _useState8[1];
                var phoneCountry = typeof props.phoneCountry === 'undefined' ? 'us' : props.phoneCountry.value.toLowerCase();
                var acceptIntPhones = typeof props.acceptIntPhones === 'undefined' ? true : props.acceptIntPhones;
                var addPhoneExt = props.addPhoneExt || false;
                var extPlaceholder = typeof props.extPlaceholder === 'undefined' ? 'ext' : props.extPlaceholder;
                var required = props.required,
                    label = props.label;
                var renderLabel = function renderLabel() {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
                        className: "fitText for-input phone-label ".concat(isFocused || phone ? 'label-up' : '')
                    }, required && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        className: "required"
                    }, "* "), label);
                };

                function renderPhoneExtension() {
                    return addPhoneExt && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        id: "".concat(props.id, "-ext"),
                        type: "tel",
                        name: "phoneExtension",
                        extension: extension,
                        value: extension,
                        className: "phone-number__extension",
                        placeholder: extPlaceholder,
                        onChange: function onChange(e) {
                            return setExtension(e.target.value);
                        },
                        size: extPlaceholder ? extPlaceholder.length : 3
                    });
                }

                function labelText() {
                    return props.required ? "* ".concat(props.label) : props.label;
                }

                function renderPhoneInput() {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        className: "phone-number__input__wrapper"
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl_tel_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        fieldId: props.id,
                        allowDropdown: acceptIntPhones,
                        defaultCountry: phoneCountry,
                        preferredCountries: ['us'],
                        customPlaceholder: props.customPlaceholder ? labelText : null,
                        fieldName: "phoneNumber",
                        telInputProps: {
                            type: 'tel',
                            'data-form-type': 'phone',
                            'data-type': 'phone',
                            phone: phone,
                            status: status
                        },
                        countriesData: _powr_phone_countries_eng__WEBPACK_IMPORTED_MODULE_3__["default"],
                        inputClassName: "phone-number__input".concat(props.required ? ' required' : ''),
                        containerClassName: "intl-tel-input phone-number__input-wrapper",
                        onPhoneNumberChange: function onPhoneNumberChange(valid, value, countryData, number) {
                            return savePhone(valid, value, countryData, number);
                        },
                        defaultValue: phone,
                        onPhoneNumberFocus: function onPhoneNumberFocus() {
                            return toggleFocus(true);
                        },
                        onPhoneNumberBlur: function onPhoneNumberBlur() {
                            return toggleFocus(false);
                        }
                    }), renderPhoneExtension());
                }

                function savePhone(valid, value, countryData, number) {
                    setStatus(valid ? 'valid' : 'invalid');
                    setPhone(valid ? number : value);
                }
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "phone-number__wrapper"
                }, renderLabel(), renderPhoneInput());
            }
            PowrPhoneNumberInput.propTypes = {
                id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
                props: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
                phoneCountry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
                acceptIntPhones: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
                addPhoneExt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
                extPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                required: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
                label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                customPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
                status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['invalid', 'valid']),
                phoneExtension: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                phoneNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
            };
        }),
        3739: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return PowrSlimCountdownTimer;
            });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(378);
            var prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
            var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3740);

            function PowrSlimCountdownTimer(props) {
                var targetDate = props.targetDate,
                    labelDays = props.labelDays,
                    labelHours = props.labelHours,
                    labelMinutes = props.labelMinutes,
                    labelSeconds = props.labelSeconds,
                    contentFontStyleFontColor = props.contentFontStyleFontColor,
                    contentFontStyleFontFamily = props.contentFontStyleFontFamily,
                    contentFontStyleFontSize = props.contentFontStyleFontSize,
                    contentFontStyleFontStyle = props.contentFontStyleFontStyle,
                    labelFontStyleFontColor = props.labelFontStyleFontColor,
                    labelFontStyleFontFamily = props.labelFontStyleFontFamily,
                    labelFontStyleFontSize = props.labelFontStyleFontSize,
                    labelFontStyleFontStyle = props.labelFontStyleFontStyle,
                    separatorStyle = props.separatorStyle,
                    counterNumberSpacing = props.counterNumberSpacing,
                    labelSpacing = props.labelSpacing,
                    previewMode = props.previewMode;
                var separators = {
                    none: '',
                    colon: ':',
                    period: '.',
                    dash: '-'
                };
                var timerContentStyle = {
                    color: contentFontStyleFontColor,
                    fontFamily: contentFontStyleFontFamily,
                    fontSize: contentFontStyleFontSize,
                    fontStyle: contentFontStyleFontStyle,
                    fontWeight: contentFontStyleFontStyle,
                    lineHeight: 1
                };
                var timerLabelStyle = {
                    color: labelFontStyleFontColor,
                    fontFamily: labelFontStyleFontFamily,
                    fontSize: labelFontStyleFontSize,
                    fontStyle: labelFontStyleFontStyle,
                    fontWeight: labelFontStyleFontStyle
                };
                var gaps = window.isMobile() || previewMode === 'mobile' ? "".concat(labelSpacing, " 5px") : "".concat(labelSpacing, " ").concat(counterNumberSpacing);
                var separatorStyles = {
                    lineHeight: 0,
                    fontSize: 30,
                    fontStyle: 'normal',
                    textAlign: 'center'
                };
                var gridStyles = {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, auto)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: gaps
                };
                var renderer = function renderer(_ref) {
                    var days = _ref.days,
                        hours = _ref.hours,
                        minutes = _ref.minutes,
                        seconds = _ref.seconds;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        className: "slim-countdown-timer margin-v-m text-center"
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        className: "slim-countdown-timer__container",
                        style: gridStyles
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        className: "text-center",
                        style: timerContentStyle
                    }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(days)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                        style: separatorStyles
                    }, separators[separatorStyle]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        className: "text-center",
                        style: timerContentStyle
                    }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(hours)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                        style: separatorStyles
                    }, separators[separatorStyle]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        className: "text-center",
                        style: timerContentStyle
                    }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(minutes)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                        style: separatorStyles
                    }, separators[separatorStyle]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        className: "text-center",
                        style: timerContentStyle
                    }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(seconds)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        className: "text-center ",
                        style: timerLabelStyle
                    }, labelDays), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        className: "text-center",
                        style: timerLabelStyle
                    }, labelHours), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        className: "text-center",
                        style: timerLabelStyle
                    }, labelMinutes), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                        className: "text-center",
                        style: timerLabelStyle
                    }, labelSeconds)));
                };
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "slim-countdown-timer__wrapper"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    date: targetDate,
                    renderer: renderer
                }));
            }
            PowrSlimCountdownTimer.defaultProps = {
                previewMode: 'desktop'
            };
            PowrSlimCountdownTimer.propTypes = {
                targetDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date)]).isRequired,
                labelDays: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                labelHours: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                labelMinutes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                labelSeconds: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                contentFontStyleFontColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                contentFontStyleFontFamily: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                contentFontStyleFontSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                contentFontStyleFontStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                labelFontStyleFontColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                labelFontStyleFontFamily: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                labelFontStyleFontSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                labelFontStyleFontStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                separatorStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                counterNumberSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                labelSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                previewMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
            };
        }),
        3741: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return CountdownTimer;
            });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(378);
            var prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
            var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3740);
            var _modules_app_views_countdown_timer_v2_display_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3742);
            var _modules_app_views_countdown_timer_v2_display_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3830);
            var _modules_app_views_countdown_timer_v2_display_fixed_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3831);
            var _modules_app_views_countdown_timer_v2_behavior_after_count__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3832);
            var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3743);
            var _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3829);

            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    if (enumerableOnly) symbols = symbols.filter(function(sym) {
                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                    });
                    keys.push.apply(keys, symbols);
                }
                return keys;
            }

            function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i] != null ? arguments[i] : {};
                    if (i % 2) {
                        ownKeys(Object(source), true).forEach(function(key) {
                            _defineProperty(target, key, source[key]);
                        });
                    } else if (Object.getOwnPropertyDescriptors) {
                        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                    } else {
                        ownKeys(Object(source)).forEach(function(key) {
                            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                        });
                    }
                }
                return target;
            }

            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }

            function _slicedToArray(arr, i) {
                return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
            }

            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }

            function _unsupportedIterableToArray(o, minLen) {
                if (!o) return;
                if (typeof o === "string") return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                if (n === "Object" && o.constructor) n = o.constructor.name;
                if (n === "Map" || n === "Set") return Array.from(o);
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
            }

            function _arrayLikeToArray(arr, len) {
                if (len == null || len > arr.length) len = arr.length;
                for (var i = 0, arr2 = new Array(len); i < len; i++) {
                    arr2[i] = arr[i];
                }
                return arr2;
            }

            function _iterableToArrayLimit(arr, i) {
                if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = undefined;
                try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;
                    _e = err;
                } finally {
                    try {
                        if (!_n && _i["return"] != null) _i["return"]();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }

            function _arrayWithHoles(arr) {
                if (Array.isArray(arr)) return arr;
            }

            function _extends() {
                _extends = Object.assign || function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                    return target;
                };
                return _extends.apply(this, arguments);
            }
            var App = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(function(props) {
                return {
                    padding: props.theme.countdownType === 'cart' ? props.theme.counterPadding : 'unset'
                };
            });
            var createTimerRenderer = function createTimerRenderer(_ref) {
                var behaviorAfterCount = _ref.behaviorAfterCount,
                    prevValue = _ref.prevValue,
                    countdownType = _ref.countdownType,
                    canShowPreview = _ref.canShowPreview,
                    countingUp = _ref.countingUp,
                    isStandalone = _ref.isStandalone;
                return function(timeProps) {
                    var onViewAndCompleted = !isStandalone && timeProps.completed;
                    var showAfterCountPreview = onViewAndCompleted && behaviorAfterCount !== 'display_counter' || canShowPreview;
                    if (!countingUp && showAfterCountPreview) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_behavior_after_count__WEBPACK_IMPORTED_MODULE_6__["default"], null);
                    switch (countdownType) {
                        case 'banner':
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_display_banner__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, timeProps, {
                                prevValue: prevValue
                            }));
                        case 'cart':
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_display_cart__WEBPACK_IMPORTED_MODULE_4__["default"], timeProps);
                        case 'fixedHeader':
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_display_fixed_header__WEBPACK_IMPORTED_MODULE_5__["default"], timeProps);
                        default:
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_display_banner__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, timeProps, {
                                prevValue: prevValue
                            }));
                    }
                };
            };
            var appView = document.querySelector('#appView');
            var getWidth = function getWidth() {
                return appView.clientWidth;
            };

            function useAppViewWidth() {
                var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getWidth()),
                    _useState2 = _slicedToArray(_useState, 2),
                    width = _useState2[0],
                    setWidth = _useState2[1];
                Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function() {
                    var timeoutId = null;
                    var resizeListener = function resizeListener() {
                        clearTimeout(timeoutId);
                        timeoutId = setTimeout(function() {
                            return setWidth(getWidth());
                        }, 150);
                    };
                    appView.addEventListener('resize', resizeListener);
                    return function() {
                        appView.removeEventListener('resize', resizeListener);
                    };
                }, []);
                return width;
            }

            function CountdownTimer(props) {
                var appViewWidth = useAppViewWidth();
                var timeInMilliseconds = function timeInMilliseconds() {
                    return Date.now() + _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_8__["INTERVAL_UNIT_MS"][props.perVisitorUnit] * props.perVisitorQuantity;
                };
                var behavior = _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_8__["TIMER_GOAL_BEHAVIOR"][props.timerGoal];
                var getPrevValue = function getPrevValue() {
                    return behavior.type === 'number' ? {
                        number: props.targetNumber
                    } : {
                        days: 0,
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    };
                };
                var getTime = function getTime(initialTime) {
                    if (!behavior.useCookie) return initialTime;
                    var cookieKey = "powr_countdown_v2_".concat(props.timerGoal, "_").concat(props.id);
                    var timeRaw = window.getCookie(cookieKey, true);
                    if (!timeRaw) {
                        window.setCookie(cookieKey, initialTime, 10, true);
                        return initialTime;
                    }
                    return parseInt(timeRaw);
                };
                var getTimeForNumberCounter = function getTimeForNumberCounter(direction) {
                    var updateFrequency = _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_8__["INTERVAL_UNIT_MS"][props.intervalUnit] * props.interval;
                    var timeShift = updateFrequency * parseInt(props.targetNumber, 10) * (direction === 'up' ? -1 : 1);
                    var startTime = getTime(Date.now());
                    return startTime + timeShift;
                };
                var attributes = _objectSpread(_objectSpread({}, props), {}, {
                    type: behavior.type,
                    appViewWidth: appViewWidth
                });
                var prevValue = getPrevValue();
                var getDate = function getDate() {
                    if (props.timerGoal === 'countdownTimeVisitor') {
                        var initialTime = timeInMilliseconds();
                        return getTime(initialTime);
                    }
                    if (behavior.type === 'number') {
                        return getTimeForNumberCounter(behavior.countDirection);
                    }
                    if (behavior.countDirection === 'up') {
                        return props.startDate;
                    }
                    return props.scheduleDates.end;
                };
                var behaviorAfterCount = props["".concat(props.countdownType, "_behaviorAfterCount")];
                var notDisplayCounter = behaviorAfterCount !== 'display_counter';
                var canShowPreview = notDisplayCounter && props.behaviorAfterCountPreview;
                var onComplete = function onComplete() {
                    if (props.countdownType !== 'cart') return;
                    if (props.cart_behaviorAfterCount.includes('empty_cart')) {
                        props.clearCart();
                    }
                };
                var getStartDate = function getStartDate() {
                    if (['countdownTime', 'countdownDate'].includes(props.timerGoal)) return Math.max(props.scheduleDates.start, Date.now());
                    return Date.now();
                };
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    className: "countdown-timer-v2"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_7__["ThemeProvider"], {
                    theme: attributes
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, {
                    className: "flex-row justify-content-center"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    date: getDate(),
                    now: getStartDate,
                    renderer: createTimerRenderer({
                        countdownType: props.countdownType,
                        prevValue: prevValue,
                        canShowPreview: canShowPreview,
                        isStandalone: props.isStandalone,
                        countingUp: behavior.countDirection === 'up',
                        behaviorAfterCount: behaviorAfterCount
                    }),
                    overtime: behavior.countDirection !== 'down',
                    onComplete: onComplete
                }))));
            }
            CountdownTimer.defaultProps = {
                countdownType: 'fixedHeader'
            };
            CountdownTimer.propTypes = {
                startDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date)]).isRequired,
                beforeTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                countdownType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['banner', 'cart', 'fixedHeader']),
                perVisitorUnit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                perVisitorQuantity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
                intervalUnit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['ms', 's', 'm', 'h', 'd']),
                interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
                targetNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
                id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
                timerGoal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['countdownDate', 'countdownTime', 'countdownTimeVisitor', 'countdownNumberVisitor', 'countupNumber', 'countupNumberVisitor', 'countupDate']),
                behaviorAfterCountPreview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
                behaviorAfterCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                locals: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
                scheduleDates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
                isStandalone: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
                clearCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
                cart_behaviorAfterCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
            };
        }),
        3742: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return Banner;
            });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3743);
            var _modules_react_components_common_condition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(652);
            var _modules_app_views_countdown_timer_v2_powrmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3749);
            var _helpers_upgrade_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(333);
            var react_countdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3740);
            var react_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3750);
            var react_animations__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(react_animations__WEBPACK_IMPORTED_MODULE_6__);
            var _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3829);

            function _templateObject2() {
                var data = _taggedTemplateLiteral(["", ""]);
                _templateObject2 = function _templateObject2() {
                    return data;
                };
                return data;
            }

            function _templateObject() {
                var data = _taggedTemplateLiteral(["\n  animation: 1s ", " infinite;\n"]);
                _templateObject = function _templateObject() {
                    return data;
                };
                return data;
            }

            function _taggedTemplateLiteral(strings, raw) {
                if (!raw) {
                    raw = strings.slice(0);
                }
                return Object.freeze(Object.defineProperties(strings, {
                    raw: {
                        value: Object.freeze(raw)
                    }
                }));
            }

            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    if (enumerableOnly) symbols = symbols.filter(function(sym) {
                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                    });
                    keys.push.apply(keys, symbols);
                }
                return keys;
            }

            function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i] != null ? arguments[i] : {};
                    if (i % 2) {
                        ownKeys(Object(source), true).forEach(function(key) {
                            _defineProperty(target, key, source[key]);
                        });
                    } else if (Object.getOwnPropertyDescriptors) {
                        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                    } else {
                        ownKeys(Object(source)).forEach(function(key) {
                            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                        });
                    }
                }
                return target;
            }

            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }

            function _slicedToArray(arr, i) {
                return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
            }

            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }

            function _unsupportedIterableToArray(o, minLen) {
                if (!o) return;
                if (typeof o === "string") return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                if (n === "Object" && o.constructor) n = o.constructor.name;
                if (n === "Map" || n === "Set") return Array.from(o);
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
            }

            function _arrayLikeToArray(arr, len) {
                if (len == null || len > arr.length) len = arr.length;
                for (var i = 0, arr2 = new Array(len); i < len; i++) {
                    arr2[i] = arr[i];
                }
                return arr2;
            }

            function _iterableToArrayLimit(arr, i) {
                if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = undefined;
                try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;
                    _e = err;
                } finally {
                    try {
                        if (!_n && _i["return"] != null) _i["return"]();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }

            function _arrayWithHoles(arr) {
                if (Array.isArray(arr)) return arr;
            }
            var ANIMATIONS = {
                zoomIn: react_animations__WEBPACK_IMPORTED_MODULE_6__["zoomIn"],
                flip: react_animations__WEBPACK_IMPORTED_MODULE_6__["flip"],
                rotateOut: react_animations__WEBPACK_IMPORTED_MODULE_6__["rotateOut"],
                fadeOut: react_animations__WEBPACK_IMPORTED_MODULE_6__["fadeOut"],
                zoomOut: react_animations__WEBPACK_IMPORTED_MODULE_6__["zoomOut"],
                rubberBand: react_animations__WEBPACK_IMPORTED_MODULE_6__["rubberBand"],
                fadeOutUp: react_animations__WEBPACK_IMPORTED_MODULE_6__["fadeOutUp"],
                bounceInUp: react_animations__WEBPACK_IMPORTED_MODULE_6__["bounceInUp"]
            };
            var CONTAINER_WIDTH_COEF = 1.02;
            var CONTAINER_HEIGHT_COEF = 1.38;
            var WatermarkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(function(props) {
                var joinedNumbers = props.theme.type === 'number' && props.theme.counterStyle === 'joined';
                var dontShowBackground = props.theme.counterFigure === 'no_borders' || joinedNumbers;
                var fontSize = props.theme.appViewWidth > 428 ? props.theme.banner_counterFontSize : Object(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["multiplySize"])(props.theme.banner_counterFontSize, _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["MOBILE_SCREEN_COEFFICIENT"]);
                var height = fontSize;
                var width = fontSize;
                if (props.theme.counterFigure !== 'no_borders' && (props.theme.counterStyle === 'separate' || props.theme.type === 'date')) {
                    height = Object(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["multiplySize"])(fontSize, 45 / 36);
                    width = Object(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["multiplySize"])(fontSize, CONTAINER_WIDTH_COEF);
                }
                if (props.theme.counterFigure === 'cycle') {
                    height = Object(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["multiplySize"])(fontSize, 2);
                    width = Object(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["multiplySize"])(fontSize, 2);
                }
                var padding = dontShowBackground ? '10%' : "15%";
                var borderRadius = props.theme.counterFigure === 'cycle' ? '50%' : 'unset';
                return {
                    width: width,
                    height: height,
                    padding: padding,
                    borderRadius: borderRadius,
                    display: 'flex',
                    justifyContent: 'center'
                };
            });
            var powrmark = function powrmark() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WatermarkWrapper, {
                    id: "watermark"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_powrmark__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    margin: "unset"
                }));
            };
            var createDateElements = function createDateElements(_ref) {
                var periods = _ref.periods,
                    prevValue = _ref.prevValue,
                    values = _ref.values,
                    separator = _ref.separator,
                    premiumStatus = _ref.premiumStatus;
                var createTimePeriodContainer = function createTimePeriodContainer(period) {
                    var numbers = [];
                    var prevTimeString = Object(react_countdown__WEBPACK_IMPORTED_MODULE_5__["zeroPad"])(prevValue[period]);
                    var currentTimeString = values[period];
                    var changed = false;
                    [0, 1, 2, 3].forEach(function(index) {
                        if (prevTimeString[index] || currentTimeString[index]) {
                            if (prevTimeString[index] !== currentTimeString[index]) {
                                numbers.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CounterNumber, {
                                    className: "counterNumber"
                                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Animated, null, currentTimeString[index])));
                                changed = true;
                            } else {
                                numbers.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CounterNumber, {
                                    className: "counterNumber"
                                }, currentTimeString[index]));
                            }
                        }
                    });
                    if (changed) {
                        prevValue[period] = values[period];
                    }
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Counter, {
                        className: "counter",
                        key: period
                    }, numbers);
                };
                var timePeriodContainers = periods.map(createTimePeriodContainer);
                var timeWithSeparators = timePeriodContainers.reduce(function(prev, curr) {
                    return [prev, separator, curr];
                });
                if (_helpers_upgrade_helper__WEBPACK_IMPORTED_MODULE_4__["default"].isUpgradeRequired(premiumStatus, 'premium')) timeWithSeparators.push(powrmark());
                return timeWithSeparators;
            };
            var createNumberElements = function createNumberElements(_ref2) {
                var value = _ref2.value,
                    prevValue = _ref2.prevValue,
                    updateFrequency = _ref2.updateFrequency,
                    premiumStatus = _ref2.premiumStatus;
                var numberToShow = parseInt(value / updateFrequency);
                var maxElementsAmount = numberToShow.toString().length + 1;
                var numAsString = Object(react_countdown__WEBPACK_IMPORTED_MODULE_5__["zeroPad"])(numberToShow, Math.max(5, maxElementsAmount));
                var prevNumAsString = Object(react_countdown__WEBPACK_IMPORTED_MODULE_5__["zeroPad"])(prevValue.number, Math.max(5, maxElementsAmount));
                if (numberToShow !== prevValue.number) {
                    prevValue.number = numberToShow;
                }
                var containersWithNumbers = [];
                for (var index = 0; index < numAsString.length; index++) {
                    if (numAsString[index] !== prevNumAsString[index]) {
                        containersWithNumbers.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Counter, {
                            className: "counter"
                        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CounterNumber, {
                            className: "counterNumber"
                        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Animated, null, numAsString[index]))));
                    } else {
                        containersWithNumbers.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Counter, {
                            className: "counter"
                        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CounterNumber, {
                            className: "counterNumber"
                        }, numAsString[index])));
                    }
                }
                if (_helpers_upgrade_helper__WEBPACK_IMPORTED_MODULE_4__["default"].isUpgradeRequired(premiumStatus, 'premium')) containersWithNumbers.push(powrmark());
                return containersWithNumbers;
            };
            var TimerGrid = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(function(props) {
                var borderRadius = 'unset';
                var border = 'unset';
                var padding = 'unset';
                var backgroundColor = 'unset';
                var backgroundImage = 'unset';
                if (props.theme.type === 'number' && props.theme.counterStyle === 'joined' && props.theme.counterFigure !== 'no_borders') {
                    var _getBackground = getBackground(props.theme);
                    var _getBackground2 = _slicedToArray(_getBackground, 2);
                    backgroundColor = _getBackground2[0];
                    backgroundImage = _getBackground2[1];
                    borderRadius = props.theme.counterFigure === 'cycle' ? '50%' : props.theme.banner_counterBorderRadius;
                    border = "".concat(props.theme.banner_counterBorderSize, " solid ").concat(props.theme.banner_counterBorderColor);
                    padding = '2%';
                }
                return {
                    display: 'grid',
                    gridTemplateColumns: "repeat(".concat(props.itemsCount, ", auto)"),
                    alignItems: 'center',
                    justifyContent: 'center',
                    justifyItems: 'center',
                    gap: "".concat(props.theme.banner_labelSpacing, " ").concat(props.theme.elementSpacing),
                    marginBottom: '15px',
                    borderRadius: borderRadius,
                    border: border,
                    padding: padding,
                    backgroundColor: backgroundColor,
                    backgroundImage: backgroundImage
                };
            });
            var TimerGridCell = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div({
                display: 'flex',
                justifyContent: 'center'
            });
            var getBackground = function getBackground(theme) {
                return [theme.banner_counterBackgroundGradient ? "unset" : theme.banner_counterBackgroundColor, theme.banner_counterBackgroundGradient ? "linear-gradient(".concat(theme.banner_counterBackgroundStartColor, ", ").concat(theme.banner_counterBackgroundEndColor, ")") : 'unset'];
            };
            var CounterDefault = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(function(props) {
                var _getBackground3 = getBackground(props.theme),
                    _getBackground4 = _slicedToArray(_getBackground3, 2),
                    backgroundColor = _getBackground4[0],
                    backgroundImage = _getBackground4[1];
                var joinedNumbers = props.theme.type === 'number' && props.theme.counterStyle === 'joined';
                if (props.theme.counterStyle === 'separate' || joinedNumbers) {
                    backgroundColor = 'unset';
                    backgroundImage = 'unset';
                }
                var fontSize = props.theme.appViewWidth > 428 ? props.theme.banner_counterFontSize : Object(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["multiplySize"])(props.theme.banner_counterFontSize, _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["MOBILE_SCREEN_COEFFICIENT"]);
                return {
                    textAlign: 'center',
                    color: props.theme.banner_counterFontColor,
                    fontFamily: props.theme.banner_counterFontFamily,
                    fontSize: Object(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["multiplySize"])(fontSize, 0.8),
                    fontWeight: props.theme.banner_counterFontStyle,
                    fontStyle: props.theme.banner_counterFontStyle,
                    lineHeight: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: Object(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["multiplySize"])(fontSize, 2),
                    height: Object(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["multiplySize"])(fontSize, 2),
                    backgroundColor: backgroundColor,
                    backgroundImage: backgroundImage
                };
            });
            var Counter = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(CounterDefault)(function(props) {
                if (props.theme.counterStyle === 'separate') {
                    return {
                        width: 'unset',
                        height: 'unset',
                        gap: props.theme.elementSpacing
                    };
                }
                if (props.theme.type === 'number') {
                    return {
                        width: 'unset',
                        height: 'unset'
                    };
                }
                if (props.theme.counterFigure === 'no_borders') {
                    return {
                        border: 'none'
                    };
                }
                return {
                    border: "".concat(props.theme.banner_counterBorderSize, " solid ").concat(props.theme.banner_counterBorderColor),
                    overflow: 'hidden',
                    borderRadius: props.theme.counterFigure === 'square' ? props.theme.banner_counterBorderRadius : '50%'
                };
            });
            var CounterNumber = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(function(props) {
                var defaults = {
                    display: 'flex'
                };
                var extra = {};
                if (props.theme.counterFigure === 'no_borders') {
                    return {
                        border: 'none',
                        backgroundColor: 'unset',
                        backgroundImage: 'unset'
                    };
                }
                var fontSize = props.theme.appViewWidth > 428 ? props.theme.banner_counterFontSize : Object(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["multiplySize"])(props.theme.banner_counterFontSize, _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["MOBILE_SCREEN_COEFFICIENT"]);
                if (props.theme.counterStyle === 'separate') {
                    var _getBackground5 = getBackground(props.theme),
                        _getBackground6 = _slicedToArray(_getBackground5, 2),
                        backgroundColor = _getBackground6[0],
                        backgroundImage = _getBackground6[1];
                    defaults = {
                        display: 'flex',
                        backgroundColor: backgroundColor,
                        backgroundImage: backgroundImage,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: Object(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["multiplySize"])(fontSize, 2),
                        height: Object(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["multiplySize"])(fontSize, 2)
                    };
                    switch (props.theme.counterFigure) {
                        case 'square':
                            extra = {
                                gap: props.theme.elementSpacing,
                                border: "".concat(props.theme.banner_counterBorderSize, " solid ").concat(props.theme.banner_counterBorderColor),
                                borderRadius: props.theme.banner_counterBorderRadius,
                                width: Object(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["multiplySize"])(fontSize, CONTAINER_WIDTH_COEF),
                                height: Object(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["multiplySize"])(fontSize, CONTAINER_HEIGHT_COEF)
                            };
                            break;
                        case 'cycle':
                            extra = {
                                gap: props.theme.elementSpacing,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: "".concat(props.theme.banner_counterBorderSize, " solid ").concat(props.theme.banner_counterBorderColor)
                            };
                            break;
                        case 'no_borders':
                            extra = {
                                height: 'unset',
                                width: Object(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["multiplySize"])(fontSize, 1.3)
                            };
                            break;
                    }
                }
                return _objectSpread(_objectSpread({}, defaults), extra);
            });
            var Animated = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function(props) {
                return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject2(), ANIMATIONS[props.theme.countdownAnimation]);
            });
            var Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(function(props) {
                return {
                    textAlign: 'center',
                    color: props.theme.banner_labelFontColor,
                    fontFamily: props.theme.banner_labelFontFamily,
                    fontSize: props.theme.appViewWidth > 428 ? props.theme.banner_labelFontSize : Object(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["multiplySize"])(props.theme.banner_labelFontSize, _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["MOBILE_SCREEN_COEFFICIENT"]),
                    fontStyle: props.theme.banner_labelFontStyle,
                    fontWeight: props.theme.banner_labelFontStyle
                };
            });
            var Separator = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span({
                lineHeight: 0,
                fontSize: '16px',
                fontStyle: 'normal',
                textAlign: 'center'
            });
            var Layout = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(function(props) {
                return {
                    display: 'inline-flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: props.theme.banner_backgroundGradient ? "unset" : props.theme.banner_backgroundColor,
                    backgroundImage: props.theme.banner_backgroundGradient ? "linear-gradient(".concat(props.theme.banner_backgroundStartColor, ", ").concat(props.theme.banner_backgroundEndColor, ")") : 'unset'
                };
            });
            var separators = {
                none: '',
                colon: ':',
                period: '.',
                dash: '-'
            };

            function Banner(timeProps) {
                var theme = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
                var activeTimePeriods = _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["TIME_PERIODS"].filter(function(period) {
                    return theme["show".concat(period)];
                }).map(function(period) {
                    return period.toLowerCase();
                });
                var separator = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimerGridCell, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Separator, null, separators[theme.separatorStyle]));
                var renderButtonLink = function renderButtonLink() {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["ButtonLayout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["ButtonLink"], {
                        target: theme.buttonLinkBehavior,
                        href: theme.buttonLink
                    }, theme.buttonText));
                };
                var updateFrequency = _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["INTERVAL_UNIT_MS"][theme.intervalUnit] * theme.interval;
                var elements = theme.type === 'date' ? createDateElements({
                    periods: activeTimePeriods,
                    prevValue: timeProps.prevValue,
                    values: timeProps.formatted,
                    separator: separator,
                    premiumStatus: theme.premiumStatus
                }) : createNumberElements({
                    prevValue: timeProps.prevValue,
                    value: Math.abs(timeProps.total),
                    updateFrequency: updateFrequency,
                    premiumStatus: theme.premiumStatus
                });
                var labels = theme.type === 'date' ? activeTimePeriods.map(function(period) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimerGridCell, {
                        key: period
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, null, theme["".concat(period, "Label")]));
                }).reduce(function(prev, curr, index) {
                    return [prev, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimerGridCell, {
                        key: index
                    }), curr];
                }) : null;
                var itemsCount;
                if (theme.type === 'date') {
                    itemsCount = _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["TIME_PERIODS"].filter(function(period) {
                        return theme["show".concat(period)];
                    }).length * 2 - 1;
                } else {
                    var numberToShow = parseInt(Math.abs(timeProps.total) / updateFrequency);
                    var maxElementsAmount = numberToShow.toString().length + 1;
                    itemsCount = Math.max(maxElementsAmount, 5);
                }
                if (_helpers_upgrade_helper__WEBPACK_IMPORTED_MODULE_4__["default"].isUpgradeRequired(theme.premiumStatus, 'premium')) {
                    itemsCount += 1;
                    if (labels !== null) {
                        labels.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimerGridCell, null));
                    }
                }
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Layout, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                    style: {
                        textAlign: theme.banner_titleAndSubtitleAlignments
                    },
                    className: "width100"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_react_components_common_condition__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    match: theme.banner_beforeTitle !== null
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["BannerTitle"], {
                    id: "banner_beforeTitle"
                }, theme.banner_beforeTitle)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_react_components_common_condition__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    match: theme.banner_beforeSubtitle !== null
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_7__["BannerSubtitle"], null, theme.banner_beforeSubtitle)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_react_components_common_condition__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    match: theme.buttonPosition === 'top' && theme.buttonType === 'link'
                }, renderButtonLink())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimerGrid, {
                    itemsCount: itemsCount,
                    id: "timerGrid"
                }, elements, labels), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_react_components_common_condition__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    match: theme.buttonPosition === 'bottom' && theme.buttonType === 'link'
                }, renderButtonLink()));
            }
        }),
        3749: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(378);
            var prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
            var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3743);
            var _modules_react_components_powr_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1454);

            function _templateObject() {
                var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin: ", ";\n  height: ", ";\n  width: ", ";\n  &:hover {\n    cursor: pointer;\n  }\n"]);
                _templateObject = function _templateObject() {
                    return data;
                };
                return data;
            }

            function _taggedTemplateLiteral(strings, raw) {
                if (!raw) {
                    raw = strings.slice(0);
                }
                return Object.freeze(Object.defineProperties(strings, {
                    raw: {
                        value: Object.freeze(raw)
                    }
                }));
            }
            var WatermarkLayout = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject(), function(props) {
                return props.margin;
            }, function(props) {
                return props.height;
            }, function(props) {
                return props.width;
            });
            var Powrmark = function Powrmark(props) {
                var theme = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
                var href = theme.isStandalone ? null : "".concat(window.location.origin, "?src=watermark_countdownTimer");
                var onClick = theme.isStandalone ? window.handleTriggerPremiumClick : null;
                var fullWidthHeight = {
                    width: '100%',
                    height: '100%'
                };
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WatermarkLayout, {
                    height: props.height,
                    width: props.width,
                    margin: props.margin
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                    href: href,
                    onClick: onClick,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_react_components_powr_logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    small: true,
                    svgStyle: fullWidthHeight,
                    wrapperStyle: fullWidthHeight
                })));
            };
            WatermarkLayout.defaultProps = {
                height: '100%',
                width: 'unset',
                margin: '0 5px 0 14px'
            };
            Powrmark.propTypes = {
                small: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
                premium_status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
                margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
            };
            __webpack_exports__["default"] = (Powrmark);
        }),
        3830: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "Container", function() {
                return Container;
            });
            __webpack_require__.d(__webpack_exports__, "CartTimer", function() {
                return CartTimer;
            });
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return Cart;
            });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3743);
            var _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3829);
            var _modules_app_views_countdown_timer_v2_powrmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3749);
            var _helpers_upgrade_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(333);

            function _templateObject() {
                var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n"]);
                _templateObject = function _templateObject() {
                    return data;
                };
                return data;
            }

            function _taggedTemplateLiteral(strings, raw) {
                if (!raw) {
                    raw = strings.slice(0);
                }
                return Object.freeze(Object.defineProperties(strings, {
                    raw: {
                        value: Object.freeze(raw)
                    }
                }));
            }
            var TIME_PERIODS = {
                s: ['seconds'],
                m: ['minutes', 'seconds'],
                h: ['hours', 'minutes', 'seconds'],
                d: ['days', 'hours', 'minutes', 'seconds']
            };
            var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div({
                display: 'flex',
                justifyContent: 'center'
            });
            var CartTimer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(function(props) {
                return {
                    display: 'inline-block',
                    padding: '16px',
                    backgroundColor: props.theme.cart_backgroundGradient ? "unset" : props.theme.cart_backgroundColor,
                    color: props.theme.cart_generalTextFontColor,
                    fontFamily: props.theme.cart_generalTextFontFamily,
                    fontSize: '18px',
                    fontStyle: props.theme.cart_generalTextFontStyle,
                    fontWeight: props.theme.cart_generalTextFontStyle,
                    textAlign: 'center',
                    backgroundImage: props.theme.cart_backgroundGradient ? "linear-gradient(".concat(props.theme.cart_backgroundStartColor, ", ").concat(props.theme.cart_backgroundEndColor, ")") : 'unset'
                };
            });
            var Timer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span({
                fontWeight: 'bold',
                letterSpacing: '1px'
            });
            var Icon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span({
                fontSize: '26px'
            });
            var Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject());
            var Counter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(function(props) {
                return {
                    backgroundColor: props.theme.cart_counterBackgroundGradient ? 'unset' : props.theme.cart_counterBackgroundColor,
                    backgroundImage: props.theme.cart_counterBackgroundGradient ? "linear-gradient(".concat(props.theme.cart_counterBackgroundStartColor, ", ").concat(props.theme.cart_counterBackgroundEndColor, ")") : 'unset',
                    border: "".concat(props.theme.cart_counterBorderSize, " solid ").concat(props.theme.cart_counterBorderColor),
                    borderRadius: props.theme.cart_counterBorderRadius,
                    fontSize: '18px',
                    fontWeight: 800
                };
            });

            function Cart(timeProps) {
                var theme = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
                var activeTimePeriods = TIME_PERIODS[theme.perVisitorUnit];
                var renderTimer = activeTimePeriods.map(function(period) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Counter, {
                        key: period
                    }, timeProps.formatted[period]);
                });
                var timerWithSeparators = function timerWithSeparators() {
                    return renderTimer.reduce(function(prev, curr, index) {
                        return [prev, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
                            key: index
                        }, ":"), curr];
                    });
                };
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CartTimer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null, _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_2__["EMOJIS"][theme.cart_textBeforeCountEmoji], " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, null, theme.cart_textBeforeCount, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Timer, null, timerWithSeparators()), _helpers_upgrade_helper__WEBPACK_IMPORTED_MODULE_4__["default"].isUpgradeRequired(theme.premiumStatus, 'premium') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_powrmark__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    height: "unset"
                }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, null, " ", theme.cart_textAfterCount)));
            }
        }),
        3831: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "Container", function() {
                return Container;
            });
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return FixedHeader;
            });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3743);
            var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3740);
            var _helpers_upgrade_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(333);
            var _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3829);
            var _modules_app_views_countdown_timer_v2_powrmark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3749);
            var _document$getElementB;

            function _templateObject3() {
                var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n"]);
                _templateObject3 = function _templateObject3() {
                    return data;
                };
                return data;
            }

            function _templateObject2() {
                var data = _taggedTemplateLiteral(["\n  display: inline-block;\n"]);
                _templateObject2 = function _templateObject2() {
                    return data;
                };
                return data;
            }

            function _templateObject() {
                var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  margin-left: 5px;\n"]);
                _templateObject = function _templateObject() {
                    return data;
                };
                return data;
            }

            function _taggedTemplateLiteral(strings, raw) {
                if (!raw) {
                    raw = strings.slice(0);
                }
                return Object.freeze(Object.defineProperties(strings, {
                    raw: {
                        value: Object.freeze(raw)
                    }
                }));
            }
            var navbarHeight = ((_document$getElementB = document.getElementById('edit-topbar-container')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.offsetHeight) || 0;
            var getPositionsAndWidth = function getPositionsAndWidth(theme) {
                var inMobileOrTabletPreview = ['768', '360'].includes(theme.locals.parent_window_width);
                var top, left, right, position, width, bottom;
                if (inMobileOrTabletPreview) {
                    position = 'absolute';
                    top = theme.fixedHeader_position === 'top' ? 0 : 'unset';
                    bottom = theme.fixedHeader_position === 'bottom' ? 0 : 'unset';
                    left = 0;
                    right = 0;
                    width = '100%';
                    return {
                        position: position,
                        top: top,
                        left: left,
                        right: right,
                        width: width,
                        bottom: bottom
                    };
                }
                position = 'fixed';
                if (theme.fixedHeader_position === 'top') {
                    var _document$querySelect;
                    var promobannerHeight = ((_document$querySelect = document.querySelector('.promo-banner')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.offsetHeight) || 0;
                    top = theme.isStandalone && navbarHeight ? "".concat(navbarHeight + promobannerHeight, "px") : '0';
                    bottom = 'unset';
                } else {
                    top = 'unset';
                    bottom = 0;
                }
                left = theme.isStandalone ? '400px' : '0';
                right = 'unset';
                width = theme.isStandalone ? 'calc(100% - 400px)' : '100%';
                return {
                    top: top,
                    left: left,
                    right: right,
                    position: position,
                    width: width,
                    bottom: bottom
                };
            };
            var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(function(props) {
                var _getPositionsAndWidth = getPositionsAndWidth(props.theme),
                    width = _getPositionsAndWidth.width,
                    top = _getPositionsAndWidth.top,
                    left = _getPositionsAndWidth.left,
                    right = _getPositionsAndWidth.right,
                    position = _getPositionsAndWidth.position,
                    bottom = _getPositionsAndWidth.bottom;
                var backgroundColor = props.theme.fixedHeader_backgroundGradient ? 'initial' : props.theme.fixedHeader_backgroundColor;
                var backgroundImage = props.theme.fixedHeader_backgroundGradient ? "linear-gradient(".concat(props.theme.fixedHeader_backgroundStartColor, ", ").concat(props.theme.fixedHeader_backgroundEndColor, ")") : 'initial';
                return {
                    width: width,
                    position: position,
                    zIndex: '999999',
                    textAlign: 'center',
                    wordBreak: 'break-all',
                    fontSize: '14px',
                    top: top,
                    left: left,
                    right: right,
                    bottom: bottom,
                    padding: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: backgroundColor,
                    backgroundImage: backgroundImage
                };
            });
            var FixedHeaderTimer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(function(props) {
                return {
                    color: props.theme.fixedHeader_generalTextFontColor,
                    fontFamily: props.theme.fixedHeader_generalTextFontFamily,
                    fontSize: props.theme.fixedHeader_generalTextFontSize,
                    fontStyle: props.theme.fixedHeader_generalTextFontStyle,
                    fontWeight: props.theme.fixedHeader_generalTextFontStyle
                };
            });
            var Counter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(function(props) {
                var backgroundColor = props.theme.fixedHeader_counterBackgroundGradient ? 'initial' : props.theme.fixedHeader_counterBackgroundColor;
                var backgroundImage = props.theme.fixedHeader_counterBackgroundGradient ? "linear-gradient(".concat(props.theme.fixedHeader_counterBackgroundStartColor, ", ").concat(props.theme.fixedHeader_counterBackgroundEndColor, ")") : 'initial';
                var padding = props.inMobileOrTabletPreview ? '6px 9px' : '6px 12px';
                return {
                    textAlign: 'center',
                    padding: padding,
                    border: "".concat(props.theme.fixedHeader_counterBorderSize, " solid ").concat(props.theme.fixedHeader_counterBorderColor),
                    borderRadius: "".concat(props.theme.fixedHeader_counterBorderRadius),
                    backgroundColor: backgroundColor,
                    backgroundImage: backgroundImage,
                    width: "".concat(props.theme.type === 'date' ? 'unset' : '44px'),
                    '@media (max-width: 400px)': {
                        padding: "6px 9px"
                    }
                };
            });
            var CounterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
            var CounterValues = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span({
                fontSize: '16px',
                fontWeight: '800',
                whiteSpace: 'nowrap'
            });
            var Cross = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div({
                position: 'absolute',
                top: '8px',
                right: '8px',
                cursor: 'pointer'
            });
            var TextBeforeWithIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
            var Icon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span({
                fontSize: '20px',
                marginRight: '4px'
            });
            var createNumberElements = function createNumberElements(_ref) {
                var value = _ref.value,
                    updateFrequency = _ref.updateFrequency;
                var numberToShow = parseInt(value / updateFrequency);
                var maxElementsAmount = numberToShow.toString().length + 1;
                var numAsString = Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(numberToShow, Math.max(5, maxElementsAmount));
                var containersWithNumbers = [];
                for (var index = 0; index < numAsString.length; index++) {
                    containersWithNumbers.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Counter, {
                        key: index
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CounterValues, null, numAsString[index])));
                }
                return containersWithNumbers;
            };
            var CounterText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject3());

            function FixedHeader(timeProps) {
                var theme = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
                var days = timeProps.days,
                    hours = timeProps.hours,
                    minutes = timeProps.minutes,
                    seconds = timeProps.seconds;
                var values = {
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds
                };
                var activeTimePeriods = _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_4__["TIME_PERIODS"].filter(function(period) {
                    return theme["show".concat(period)];
                }).map(function(period) {
                    return period.toLowerCase();
                });
                var updateFrequency = _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_4__["INTERVAL_UNIT_MS"][theme.intervalUnit] * theme.interval;
                var inMobileOrTabletPreview = ['768', '360'].includes(theme.locals.parent_window_width);
                var createDateElements = function createDateElements(_ref2) {
                    var activeTimePeriods = _ref2.activeTimePeriods,
                        values = _ref2.values;
                    return activeTimePeriods.map(function(period) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Counter, {
                            key: period,
                            inMobileOrTabletPreview: inMobileOrTabletPreview
                        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CounterText, null, theme["".concat(period, "Label")], ": "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CounterValues, null, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(values[period])));
                    });
                };
                var closeTimer = function closeTimer() {
                    if (theme.isStandalone) return;
                    document.getElementById('fixed-header-container').style.display = 'none';
                };
                var elements = theme.type === 'date' ? createDateElements({
                    activeTimePeriods: activeTimePeriods,
                    values: values
                }) : createNumberElements({
                    value: Math.abs(timeProps.total),
                    updateFrequency: updateFrequency
                });
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
                    id: "fixed-header-container"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cross, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                    className: "fal fa-times",
                    onClick: closeTimer
                })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FixedHeaderTimer, {
                    id: "timer"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextBeforeWithIcon, {
                    id: "emoji-with-text"
                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null, _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_4__["EMOJIS"][theme.fixedHeader_textBeforeCountEmoji]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CounterText, null, theme.fixedHeader_textBeforeCount)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CounterContainer, {
                    id: "elements"
                }, elements, _helpers_upgrade_helper__WEBPACK_IMPORTED_MODULE_3__["default"].isUpgradeRequired(theme.premiumStatus, 'premium') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_powrmark__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    margin: "unset",
                    height: "20px",
                    width: "15px"
                }))));
            }
        }),
        3832: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "Message", function() {
                return Message;
            });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
            var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3743);
            var _modules_react_components_common_condition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(652);
            var _modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3829);
            var _modules_app_views_countdown_timer_v2_display_fixed_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3831);
            var _modules_app_views_countdown_timer_v2_display_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3830);
            var Message = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(function(props) {
                return {
                    color: props.theme["".concat(props.theme.countdownType, "_generalTextFontColor")],
                    fontFamily: props.theme["".concat(props.theme.countdownType, "_generalTextFontFamily")],
                    fontSize: props.theme["".concat(props.theme.countdownType, "_generalTextFontSize")] || '18px',
                    fontStyle: props.theme["".concat(props.theme.countdownType, "_generalTextFontStyle")],
                    fontWeight: props.theme["".concat(props.theme.countdownType, "_generalTextFontStyle")]
                };
            });
            var getAfterCountMessage = function getAfterCountMessage(type, message) {
                if (type === 'fixedHeader') {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_display_fixed_header__WEBPACK_IMPORTED_MODULE_4__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Message, null, message));
                }
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_display_cart__WEBPACK_IMPORTED_MODULE_5__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_display_cart__WEBPACK_IMPORTED_MODULE_5__["CartTimer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Message, null, message)));
            };

            function BehaviorAfterCount() {
                var theme = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
                if (['empty_cart_hide_counter', 'hide_counter'].includes(theme["".concat(theme.countdownType, "_behaviorAfterCount")])) {
                    return null;
                }
                if (theme.countdownType === 'banner') {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                        style: {
                            textAlign: theme.banner_titleAndSubtitleAlignments
                        }
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_3__["BannerTitle"], {
                        id: "BannerTitle"
                    }, theme.banner_finishedTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_3__["BannerSubtitle"], {
                        id: "BannerSubtitle"
                    }, theme.banner_finishiedSubtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_react_components_common_condition__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        match: theme.finishedButtonType !== 'none'
                    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_3__["ButtonLayout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modules_app_views_countdown_timer_v2_utils__WEBPACK_IMPORTED_MODULE_3__["ButtonLink"], {
                        target: "_blank",
                        href: theme.finishedButtonLink
                    }, theme.finishiedButtonText))));
                }
                return getAfterCountMessage(theme.countdownType, theme["".concat(theme.countdownType, "_finishedMessage")]);
            }
            BehaviorAfterCount.propTypes = {};
            __webpack_exports__["default"] = (BehaviorAfterCount);
        }),
        632: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "countries", function() {
                return countries;
            });
            var allCountriesEng = [
                ['Afghanistan', 'af', '93'],
                ['Albania', 'al', '355'],
                ['Algeria', 'dz', '213'],
                ['American Samoa', 'as', '1', 5, ['684']],
                ['Andorra', 'ad', '376'],
                ['Angola', 'ao', '244'],
                ['Anguilla', 'ai', '1', 6, ['264']],
                ['Antigua and Barbuda', 'ag', '1', 7, ['268']],
                ['Argentina', 'ar', '54'],
                ['Armenia', 'am', '374'],
                ['Aruba', 'aw', '297'],
                ['Australia', 'au', '61', 0],
                ['Austria', 'at', '43'],
                ['Azerbaijan', 'az', '994'],
                ['Bahamas', 'bs', '1', 8, ['242']],
                ['Bahrain', 'bh', '973'],
                ['Bangladesh', 'bd', '880'],
                ['Barbados', 'bb', '1', 9, ['246']],
                ['Belarus', 'by', '375'],
                ['Belgium', 'be', '32'],
                ['Belize', 'bz', '501'],
                ['Benin', 'bj', '229'],
                ['Bermuda', 'bm', '1', 10, ['441']],
                ['Bhutan', 'bt', '975'],
                ['Bolivia', 'bo', '591'],
                ['Bosnia and Herzegovina', 'ba', '387'],
                ['Botswana', 'bw', '267'],
                ['Brazil', 'br', '55'],
                ['British Indian Ocean Territory', 'io', '246'],
                ['British Virgin Islands', 'vg', '1', 11, ['284']],
                ['Brunei', 'bn', '673'],
                ['Bulgaria', 'bg', '359'],
                ['Burkina Faso', 'bf', '226'],
                ['Burundi', 'bi', '257'],
                ['Cambodia', 'kh', '855'],
                ['Cameroon', 'cm', '237'],
                ['Canada', 'ca', '1', 1, ['204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416', '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587', '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905']],
                ['Cape Verde', 'cv', '238'],
                ['Caribbean Netherlands', 'bq', '599', 1, ['3', '4', '7']],
                ['Cayman Islands', 'ky', '1', 12, ['345']],
                ['Central African Republic', 'cf', '236'],
                ['Chads', 'td', '235'],
                ['Chile', 'cl', '56'],
                ['China', 'cn', '86'],
                ['Christmas Island', 'cx', '61', 2],
                ['Cocos (Keeling) Islands', 'cc', '61', 1],
                ['Colombia', 'co', '57'],
                ['Comoros', 'km', '269'],
                ['Congo (DRC)', 'cd', '243'],
                ['Congo (Republic)', 'cg', '242'],
                ['Cook Islands', 'ck', '682'],
                ['Costa Rica', 'cr', '506'],
                ['Côte d’Ivoire', 'ci', '225'],
                ['Croatia', 'hr', '385'],
                ['Cuba', 'cu', '53'],
                ['Curaçao', 'cw', '599', 0],
                ['Cyprus', 'cy', '357'],
                ['Czech Republic', 'cz', '420'],
                ['Denmark', 'dk', '45'],
                ['Djibouti', 'dj', '253'],
                ['Dominica', 'dm', '1', 13, ['767']],
                ['Dominican Republic', 'do', '1', 2, ['809', '829', '849']],
                ['Ecuador', 'ec', '593'],
                ['Egypt', 'eg', '20'],
                ['El Salvador', 'sv', '503'],
                ['Equatorial Guinea', 'gq', '240'],
                ['Eritrea', 'er', '291'],
                ['Estonia', 'ee', '372'],
                ['Ethiopia', 'et', '251'],
                ['Falkland Islands', 'fk', '500'],
                ['Faroe Islands', 'fo', '298'],
                ['Fiji', 'fj', '679'],
                ['Finland', 'fi', '358', 0],
                ['France', 'fr', '33'],
                ['French Guiana', 'gf', '594'],
                ['French Polynesia', 'pf', '689'],
                ['Gabon', 'ga', '241'],
                ['Gambia', 'gm', '220'],
                ['Georgia', 'ge', '995'],
                ['Germany', 'de', '49'],
                ['Ghana', 'gh', '233'],
                ['Gibraltar', 'gi', '350'],
                ['Greece', 'gr', '30'],
                ['Greenland', 'gl', '299'],
                ['Grenada', 'gd', '1', 14, ['473']],
                ['Guadeloupe', 'gp', '590', 0],
                ['Guam', 'gu', '1', 15, ['671']],
                ['Guatemala', 'gt', '502'],
                ['Guernsey', 'gg', '44', 1, ['1481', '7781', '7839', '7911']],
                ['Guinea', 'gn', '224'],
                ['Guinea-Bissau', 'gw', '245'],
                ['Guyana', 'gy', '592'],
                ['Haiti', 'ht', '509'],
                ['Honduras', 'hn', '504'],
                ['Hong Kong', 'hk', '852'],
                ['Hungary', 'hu', '36'],
                ['Iceland', 'is', '354'],
                ['India', 'in', '91'],
                ['Indonesia', 'id', '62'],
                ['Iran', 'ir', '98'],
                ['Iraq', 'iq', '964'],
                ['Ireland', 'ie', '353'],
                ['Isle of Man', 'im', '44', 2, ['1624', '74576', '7524', '7924', '7624']],
                ['Israel', 'il', '972'],
                ['Italy', 'it', '39', 0],
                ['Jamaica', 'jm', '1', 4, ['876', '658']],
                ['Japan', 'jp', '81'],
                ['Jersey', 'je', '44', 3, ['1534', '7509', '7700', '7797', '7829', '7937']],
                ['Jordan', 'jo', '962'],
                ['Kazakhstan', 'kz', '7', 1, ['33', '7']],
                ['Kenya', 'ke', '254'],
                ['Kiribati', 'ki', '686'],
                ['Kosovo', 'xk', '383'],
                ['Kuwait', 'kw', '965'],
                ['Kyrgyzstan', 'kg', '996'],
                ['Laos', 'la', '856'],
                ['Latvia', 'lv', '371'],
                ['Lebanon', 'lb', '961'],
                ['Lesotho', 'ls', '266'],
                ['Liberia', 'lr', '231'],
                ['Libya', 'ly', '218'],
                ['Liechtenstein', 'li', '423'],
                ['Lithuania', 'lt', '370'],
                ['Luxembourg', 'lu', '352'],
                ['Macau', 'mo', '853'],
                ['Macedonia', 'mk', '389'],
                ['Madagascar', 'mg', '261'],
                ['Malawi', 'mw', '265'],
                ['Malaysia', 'my', '60'],
                ['Maldives', 'mv', '960'],
                ['Mali', 'ml', '223'],
                ['Malta', 'mt', '356'],
                ['Marshall Islands', 'mh', '692'],
                ['Martinique', 'mq', '596'],
                ['Mauritania', 'mr', '222'],
                ['Mauritius', 'mu', '230'],
                ['Mayotte', 'yt', '262', 1, ['269', '639']],
                ['Mexico', 'mx', '52'],
                ['Micronesia', 'fm', '691'],
                ['Moldova', 'md', '373'],
                ['Monaco', 'mc', '377'],
                ['Mongolia', 'mn', '976'],
                ['Montenegro', 'me', '382'],
                ['Montserrat', 'ms', '1', 16, ['664']],
                ['Morocco', 'ma', '212', 0],
                ['Mozambique', 'mz', '258'],
                ['Myanmar (Burma)', 'mm', '95'],
                ['Namibia', 'na', '264'],
                ['Nauru', 'nr', '674'],
                ['Nepal', 'np', '977'],
                ['Netherlands', 'nl', '31'],
                ['New Caledonia', 'nc', '687'],
                ['New Zealand', 'nz', '64'],
                ['Nicaragua', 'ni', '505'],
                ['Niger', 'ne', '227'],
                ['Nigeria', 'ng', '234'],
                ['Niue', 'nu', '683'],
                ['Norfolk Island', 'nf', '672'],
                ['North Korea', 'kp', '850'],
                ['Northern Mariana Islands', 'mp', '1', 17, ['670']],
                ['Norway', 'no', '47', 0],
                ['Oman', 'om', '968'],
                ['Pakistan', 'pk', '92'],
                ['Palau', 'pw', '680'],
                ['Palestine', 'ps', '970'],
                ['Panama', 'pa', '507'],
                ['Papua New Guinea', 'pg', '675'],
                ['Paraguay', 'py', '595'],
                ['Peru', 'pe', '51'],
                ['Philippines', 'ph', '63'],
                ['Poland', 'pl', '48'],
                ['Portugal', 'pt', '351'],
                ['Puerto Rico', 'pr', '1', 3, ['787', '939']],
                ['Qatar', 'qa', '974'],
                ['Réunion', 're', '262', 0],
                ['Romania', 'ro', '40'],
                ['Russia', 'ru', '7', 0],
                ['Rwanda', 'rw', '250'],
                ['Saint Barthélemy', 'bl', '590', 1],
                ['Saint Helena', 'sh', '290'],
                ['Saint Kitts and Nevis', 'kn', '1', 18, ['869']],
                ['Saint Lucia', 'lc', '1', 19, ['758']],
                ['Saint Martin', 'mf', '590', 2],
                ['Saint Pierre and Miquelon', 'pm', '508'],
                ['Saint Vincent and the Grenadines', 'vc', '1', 20, ['784']],
                ['Samoa', 'ws', '685'],
                ['San Marino', 'sm', '378'],
                ['São Tomé and Príncipe', 'st', '239'],
                ['Saudi Arabia', 'sa', '966'],
                ['Senegal', 'sn', '221'],
                ['Serbia', 'rs', '381'],
                ['Seychelles', 'sc', '248'],
                ['Sierra Leone', 'sl', '232'],
                ['Singapore', 'sg', '65'],
                ['Sint Maarten', 'sx', '1', 21, ['721']],
                ['Slovakia', 'sk', '421'],
                ['Slovenia', 'si', '386'],
                ['Solomon Islands', 'sb', '677'],
                ['Somalia', 'so', '252'],
                ['South Africa', 'za', '27'],
                ['South Korea', 'kr', '82'],
                ['South Sudan', 'ss', '211'],
                ['Spain', 'es', '34'],
                ['Sri Lanka', 'lk', '94'],
                ['Sudan', 'sd', '249'],
                ['Suriname', 'sr', '597'],
                ['Svalbard and Jan Mayen', 'sj', '47', 1, ['79']],
                ['Swaziland', 'sz', '268'],
                ['Sweden', 'se', '46'],
                ['Switzerland', 'ch', '41'],
                ['Syria', 'sy', '963'],
                ['Taiwan', 'tw', '886'],
                ['Tajikistan', 'tj', '992'],
                ['Tanzania', 'tz', '255'],
                ['Thailand', 'th', '66'],
                ['Timor-Leste', 'tl', '670'],
                ['Togo', 'tg', '228'],
                ['Tokelau', 'tk', '690'],
                ['Tonga', 'to', '676'],
                ['Trinidad and Tobago', 'tt', '1', 22, ['868']],
                ['Tunisia', 'tn', '216'],
                ['Turkey', 'tr', '90'],
                ['Turkmenistan', 'tm', '993'],
                ['Turks and Caicos Islands', 'tc', '1', 23, ['649']],
                ['Tuvalu', 'tv', '688'],
                ['U.S. Virgin Islands', 'vi', '1', 24, ['340']],
                ['Uganda', 'ug', '256'],
                ['Ukraine', 'ua', '380'],
                ['United Arab Emirates', 'ae', '971'],
                ['United Kingdom', 'gb', '44', 0],
                ['United States', 'us', '1', 0],
                ['Uruguay', 'uy', '598'],
                ['Uzbekistan', 'uz', '998'],
                ['Vanuatu', 'vu', '678'],
                ['Vatican City', 'va', '39', 1, ['06698']],
                ['Venezuela', 've', '58'],
                ['Vietnam', 'vn', '84'],
                ['Wallis and Futuna', 'wf', '681'],
                ['Western Sahara', 'eh', '212', 1, ['5288', '5289']],
                ['Yemen', 'ye', '967'],
                ['Zambia', 'zm', '260'],
                ['Zimbabwe', 'zw', '263'],
                ['Åland Islands', 'ax', '358', 1, ['18']]
            ];
            var countries = [];
            for (var i = 0; i < allCountriesEng.length; i++) {
                var item = allCountriesEng[i];
                var country = {
                    label: item[0],
                    value: item[1].toUpperCase()
                };
                countries.push(country);
            }
            __webpack_exports__["default"] = (allCountriesEng);
        }),
        652: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(378);
            var prop_types__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
            var Condition = function Condition(_ref) {
                var match = _ref.match,
                    children = _ref.children;
                return match ? children : null;
            };
            Condition.propTypes = {
                match: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool]),
                children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
            };
            __webpack_exports__["default"] = (Condition);
        }),
        812: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "makeColorString", function() {
                return makeColorString;
            });
            __webpack_require__.d(__webpack_exports__, "makeColorObject", function() {
                return makeColorObject;
            });
            var tinycolor2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(341);
            var tinycolor2__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_0__);
            var makeColorString = function makeColorString(color) {
                return 'rgba(' + color.rgb.r + ',' + color.rgb.g + ',' + color.rgb.b + ',' + color.rgb.a + ')';
            };
            var makeColorObject = function makeColorObject(data) {
                var color = data.hex ? tinycolor2__WEBPACK_IMPORTED_MODULE_0___default()(data.hex) : tinycolor2__WEBPACK_IMPORTED_MODULE_0___default()(data);
                var hsl = color.toHsl();
                var hsv = color.toHsv();
                var rgb = color.toRgb();
                var hex = color.toHex();
                var transparent = hex === '000000' && rgb.a === 0;
                return {
                    hsl: hsl,
                    hex: transparent ? 'transparent' : "#".concat(hex),
                    rgb: rgb,
                    hsv: hsv,
                    oldHue: hsl.h,
                    source: 'rgb'
                };
            };
        })
    }
]);