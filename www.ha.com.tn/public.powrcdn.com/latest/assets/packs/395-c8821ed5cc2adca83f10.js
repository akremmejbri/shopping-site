(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    [395], {
        1430: (function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _slider = __webpack_require__(1431);
            var _slider2 = _interopRequireDefault(_slider);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            exports.default = _slider2.default;
        }),
        1431: (function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _extends = Object.assign || function(target) {
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
            var _react = __webpack_require__(352);
            var _react2 = _interopRequireDefault(_react);
            var _innerSlider = __webpack_require__(1432);
            var _json2mq = __webpack_require__(1439);
            var _json2mq2 = _interopRequireDefault(_json2mq);
            var _defaultProps = __webpack_require__(1441);
            var _defaultProps2 = _interopRequireDefault(_defaultProps);
            var _innerSliderUtils = __webpack_require__(1434);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var enquire = (0, _innerSliderUtils.canUseDOM)() && __webpack_require__(1442);
            var Slider = function(_React$Component) {
                _inherits(Slider, _React$Component);

                function Slider(props) {
                    _classCallCheck(this, Slider);
                    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
                    _this.innerSliderRefHandler = function(ref) {
                        return _this.innerSlider = ref;
                    };
                    _this.slickPrev = function() {
                        return _this.innerSlider.slickPrev();
                    };
                    _this.slickNext = function() {
                        return _this.innerSlider.slickNext();
                    };
                    _this.slickGoTo = function(slide) {
                        var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        return _this.innerSlider.slickGoTo(slide, dontAnimate);
                    };
                    _this.slickPause = function() {
                        return _this.innerSlider.pause("paused");
                    };
                    _this.slickPlay = function() {
                        return _this.innerSlider.autoPlay("play");
                    };
                    _this.state = {
                        breakpoint: null
                    };
                    _this._responsiveMediaHandlers = [];
                    return _this;
                }
                Slider.prototype.media = function media(query, handler) {
                    enquire.register(query, handler);
                    this._responsiveMediaHandlers.push({
                        query: query,
                        handler: handler
                    });
                };
                Slider.prototype.componentWillMount = function componentWillMount() {
                    var _this2 = this;
                    if (this.props.responsive) {
                        var breakpoints = this.props.responsive.map(function(breakpt) {
                            return breakpt.breakpoint;
                        });
                        breakpoints.sort(function(x, y) {
                            return x - y;
                        });
                        breakpoints.forEach(function(breakpoint, index) {
                            var bQuery = void 0;
                            if (index === 0) {
                                bQuery = (0, _json2mq2.default)({
                                    minWidth: 0,
                                    maxWidth: breakpoint
                                });
                            } else {
                                bQuery = (0, _json2mq2.default)({
                                    minWidth: breakpoints[index - 1] + 1,
                                    maxWidth: breakpoint
                                });
                            }
                            (0, _innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function() {
                                _this2.setState({
                                    breakpoint: breakpoint
                                });
                            });
                        });
                        var query = (0, _json2mq2.default)({
                            minWidth: breakpoints.slice(-1)[0]
                        });
                        (0, _innerSliderUtils.canUseDOM)() && this.media(query, function() {
                            _this2.setState({
                                breakpoint: null
                            });
                        });
                    }
                };
                Slider.prototype.componentWillUnmount = function componentWillUnmount() {
                    this._responsiveMediaHandlers.forEach(function(obj) {
                        enquire.unregister(obj.query, obj.handler);
                    });
                };
                Slider.prototype.render = function render() {
                    var _this3 = this;
                    var settings;
                    var newProps;
                    if (this.state.breakpoint) {
                        newProps = this.props.responsive.filter(function(resp) {
                            return resp.breakpoint === _this3.state.breakpoint;
                        });
                        settings = newProps[0].settings === "unslick" ? "unslick" : _extends({}, _defaultProps2.default, this.props, newProps[0].settings);
                    } else {
                        settings = _extends({}, _defaultProps2.default, this.props);
                    }
                    if (settings.centerMode) {
                        if (settings.slidesToScroll > 1 && "production" !== "production") {
                            console.warn("slidesToScroll should be equal to 1 in centerMode, you are using " + settings.slidesToScroll);
                        }
                        settings.slidesToScroll = 1;
                    }
                    if (settings.fade) {
                        if (settings.slidesToShow > 1 && "production" !== "production") {
                            console.warn("slidesToShow should be equal to 1 when fade is true, you're using " + settings.slidesToShow);
                        }
                        if (settings.slidesToScroll > 1 && "production" !== "production") {
                            console.warn("slidesToScroll should be equal to 1 when fade is true, you're using " + settings.slidesToScroll);
                        }
                        settings.slidesToShow = 1;
                        settings.slidesToScroll = 1;
                    }
                    var children = _react2.default.Children.toArray(this.props.children);
                    children = children.filter(function(child) {
                        if (typeof child === "string") {
                            return !!child.trim();
                        }
                        return !!child;
                    });
                    if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
                        console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
                        settings.variableWidth = false;
                    }
                    var newChildren = [];
                    var currentWidth = null;
                    for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
                        var newSlide = [];
                        for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
                            var row = [];
                            for (var k = j; k < j + settings.slidesPerRow; k += 1) {
                                if (settings.variableWidth && children[k].props.style) {
                                    currentWidth = children[k].props.style.width;
                                }
                                if (k >= children.length) break;
                                row.push(_react2.default.cloneElement(children[k], {
                                    key: 100 * i + 10 * j + k,
                                    tabIndex: -1,
                                    style: {
                                        width: 100 / settings.slidesPerRow + "%",
                                        display: "inline-block"
                                    }
                                }));
                            }
                            newSlide.push(_react2.default.createElement("div", {
                                key: 10 * i + j
                            }, row));
                        }
                        if (settings.variableWidth) {
                            newChildren.push(_react2.default.createElement("div", {
                                key: i,
                                style: {
                                    width: currentWidth
                                }
                            }, newSlide));
                        } else {
                            newChildren.push(_react2.default.createElement("div", {
                                key: i
                            }, newSlide));
                        }
                    }
                    if (settings === "unslick") {
                        var className = "regular slider " + (this.props.className || "");
                        return _react2.default.createElement("div", {
                            className: className
                        }, newChildren);
                    } else if (newChildren.length <= settings.slidesToShow) {
                        settings.unslick = true;
                    }
                    return _react2.default.createElement(_innerSlider.InnerSlider, _extends({
                        ref: this.innerSliderRefHandler
                    }, settings), newChildren);
                };
                return Slider;
            }(_react2.default.Component);
            exports.default = Slider;
        }),
        1432: (function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            exports.InnerSlider = undefined;
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            var _extends = Object.assign || function(target) {
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
            var _react = __webpack_require__(352);
            var _react2 = _interopRequireDefault(_react);
            var _reactDom = __webpack_require__(355);
            var _reactDom2 = _interopRequireDefault(_reactDom);
            var _initialState = __webpack_require__(1433);
            var _initialState2 = _interopRequireDefault(_initialState);
            var _lodash = __webpack_require__(625);
            var _lodash2 = _interopRequireDefault(_lodash);
            var _classnames = __webpack_require__(516);
            var _classnames2 = _interopRequireDefault(_classnames);
            var _innerSliderUtils = __webpack_require__(1434);
            var _track = __webpack_require__(1435);
            var _dots = __webpack_require__(1436);
            var _arrows = __webpack_require__(1437);
            var _resizeObserverPolyfill = __webpack_require__(1438);
            var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _objectWithoutProperties(obj, keys) {
                var target = {};
                for (var i in obj) {
                    if (keys.indexOf(i) >= 0) continue;
                    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                    target[i] = obj[i];
                }
                return target;
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var InnerSlider = exports.InnerSlider = function(_React$Component) {
                _inherits(InnerSlider, _React$Component);

                function InnerSlider(props) {
                    _classCallCheck(this, InnerSlider);
                    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
                    _this.listRefHandler = function(ref) {
                        return _this.list = ref;
                    };
                    _this.trackRefHandler = function(ref) {
                        return _this.track = ref;
                    };
                    _this.adaptHeight = function() {
                        if (_this.props.adaptiveHeight && _this.list) {
                            var elem = _this.list.querySelector("[data-index=\"" + _this.state.currentSlide + "\"]");
                            _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
                        }
                    };
                    _this.componentWillMount = function() {
                        _this.ssrInit();
                        _this.props.onInit && _this.props.onInit();
                        if (_this.props.lazyLoad) {
                            var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_extends({}, _this.props, _this.state));
                            if (slidesToLoad.length > 0) {
                                _this.setState(function(prevState) {
                                    return {
                                        lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
                                    };
                                });
                                if (_this.props.onLazyLoad) {
                                    _this.props.onLazyLoad(slidesToLoad);
                                }
                            }
                        }
                    };
                    _this.componentDidMount = function() {
                        var spec = _extends({
                            listRef: _this.list,
                            trackRef: _this.track
                        }, _this.props);
                        _this.updateState(spec, true, function() {
                            _this.adaptHeight();
                            _this.props.autoplay && _this.autoPlay("update");
                        });
                        if (_this.props.lazyLoad === "progressive") {
                            _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1000);
                        }
                        _this.ro = new _resizeObserverPolyfill2.default(function() {
                            if (_this.state.animating) {
                                _this.onWindowResized(false);
                                _this.callbackTimers.push(setTimeout(function() {
                                    return _this.onWindowResized();
                                }, _this.props.speed));
                            } else {
                                _this.onWindowResized();
                            }
                        });
                        _this.ro.observe(_this.list);
                        Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(slide) {
                            slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
                            slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
                        });
                        if (!window) {
                            return;
                        }
                        if (window.addEventListener) {
                            window.addEventListener("resize", _this.onWindowResized);
                        } else {
                            window.attachEvent("onresize", _this.onWindowResized);
                        }
                    };
                    _this.componentWillUnmount = function() {
                        if (_this.animationEndCallback) {
                            clearTimeout(_this.animationEndCallback);
                        }
                        if (_this.lazyLoadTimer) {
                            clearInterval(_this.lazyLoadTimer);
                        }
                        if (_this.callbackTimers.length) {
                            _this.callbackTimers.forEach(function(timer) {
                                return clearTimeout(timer);
                            });
                            _this.callbackTimers = [];
                        }
                        if (window.addEventListener) {
                            window.removeEventListener("resize", _this.onWindowResized);
                        } else {
                            window.detachEvent("onresize", _this.onWindowResized);
                        }
                        if (_this.autoplayTimer) {
                            clearInterval(_this.autoplayTimer);
                        }
                    };
                    _this.componentWillReceiveProps = function(nextProps) {
                        var spec = _extends({
                            listRef: _this.list,
                            trackRef: _this.track
                        }, nextProps, _this.state);
                        var setTrackStyle = false;
                        for (var _iterator = Object.keys(_this.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                            var _ref;
                            if (_isArray) {
                                if (_i >= _iterator.length) break;
                                _ref = _iterator[_i++];
                            } else {
                                _i = _iterator.next();
                                if (_i.done) break;
                                _ref = _i.value;
                            }
                            var key = _ref;
                            if (!nextProps.hasOwnProperty(key)) {
                                setTrackStyle = true;
                                break;
                            }
                            if (_typeof(nextProps[key]) === "object" || typeof nextProps[key] === "function") {
                                continue;
                            }
                            if (nextProps[key] !== _this.props[key]) {
                                setTrackStyle = true;
                                break;
                            }
                        }
                        _this.updateState(spec, setTrackStyle, function() {
                            if (_this.state.currentSlide >= _react2.default.Children.count(nextProps.children)) {
                                _this.changeSlide({
                                    message: "index",
                                    index: _react2.default.Children.count(nextProps.children) - nextProps.slidesToShow,
                                    currentSlide: _this.state.currentSlide
                                });
                            }
                            if (nextProps.autoplay) {
                                _this.autoPlay("update");
                            } else {
                                _this.pause("paused");
                            }
                        });
                    };
                    _this.componentDidUpdate = function() {
                        _this.checkImagesLoad();
                        _this.props.onReInit && _this.props.onReInit();
                        if (_this.props.lazyLoad) {
                            var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_extends({}, _this.props, _this.state));
                            if (slidesToLoad.length > 0) {
                                _this.setState(function(prevState) {
                                    return {
                                        lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
                                    };
                                });
                                if (_this.props.onLazyLoad) {
                                    _this.props.onLazyLoad(slidesToLoad);
                                }
                            }
                        }
                        _this.adaptHeight();
                    };
                    _this.onWindowResized = function(setTrackStyle) {
                        if (_this.debouncedResize) _this.debouncedResize.cancel();
                        _this.debouncedResize = (0, _lodash2.default)(function() {
                            return _this.resizeWindow(setTrackStyle);
                        }, 50);
                        _this.debouncedResize();
                    };
                    _this.resizeWindow = function() {
                        var setTrackStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                        if (!_reactDom2.default.findDOMNode(_this.track)) return;
                        var spec = _extends({
                            listRef: _this.list,
                            trackRef: _this.track
                        }, _this.props, _this.state);
                        _this.updateState(spec, setTrackStyle, function() {
                            if (_this.props.autoplay) _this.autoPlay("update");
                            else _this.pause("paused");
                        });
                        _this.setState({
                            animating: false
                        });
                        clearTimeout(_this.animationEndCallback);
                        delete _this.animationEndCallback;
                    };
                    _this.updateState = function(spec, setTrackStyle, callback) {
                        var updatedState = (0, _innerSliderUtils.initializedState)(spec);
                        spec = _extends({}, spec, updatedState, {
                            slideIndex: updatedState.currentSlide
                        });
                        var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
                        spec = _extends({}, spec, {
                            left: targetLeft
                        });
                        var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);
                        if (setTrackStyle || _react2.default.Children.count(_this.props.children) !== _react2.default.Children.count(spec.children)) {
                            updatedState["trackStyle"] = trackStyle;
                        }
                        _this.setState(updatedState, callback);
                    };
                    _this.ssrInit = function() {
                        if (_this.props.variableWidth) {
                            var _trackWidth = 0,
                                _trackLeft = 0;
                            var childrenWidths = [];
                            var preClones = (0, _innerSliderUtils.getPreClones)(_extends({}, _this.props, _this.state, {
                                slideCount: _this.props.children.length
                            }));
                            var postClones = (0, _innerSliderUtils.getPostClones)(_extends({}, _this.props, _this.state, {
                                slideCount: _this.props.children.length
                            }));
                            _this.props.children.forEach(function(child) {
                                childrenWidths.push(child.props.style.width);
                                _trackWidth += child.props.style.width;
                            });
                            for (var i = 0; i < preClones; i++) {
                                _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
                                _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
                            }
                            for (var _i2 = 0; _i2 < postClones; _i2++) {
                                _trackWidth += childrenWidths[_i2];
                            }
                            for (var _i3 = 0; _i3 < _this.state.currentSlide; _i3++) {
                                _trackLeft += childrenWidths[_i3];
                            }
                            var _trackStyle = {
                                width: _trackWidth + "px",
                                left: -_trackLeft + "px"
                            };
                            if (_this.props.centerMode) {
                                var currentWidth = childrenWidths[_this.state.currentSlide] + "px";
                                _trackStyle.left = "calc(" + _trackStyle.left + " + (100% - " + currentWidth + ") / 2 ) ";
                            }
                            _this.setState({
                                trackStyle: _trackStyle
                            });
                            return;
                        }
                        var childrenCount = _react2.default.Children.count(_this.props.children);
                        var spec = _extends({}, _this.props, _this.state, {
                            slideCount: childrenCount
                        });
                        var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
                        var trackWidth = 100 / _this.props.slidesToShow * slideCount;
                        var slideWidth = 100 / slideCount;
                        var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;
                        if (_this.props.centerMode) {
                            trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
                        }
                        var trackStyle = {
                            width: trackWidth + "%",
                            left: trackLeft + "%"
                        };
                        _this.setState({
                            slideWidth: slideWidth + "%",
                            trackStyle: trackStyle
                        });
                    };
                    _this.checkImagesLoad = function() {
                        var images = document.querySelectorAll(".slick-slide img");
                        var imagesCount = images.length,
                            loadedCount = 0;
                        Array.prototype.forEach.call(images, function(image) {
                            var handler = function handler() {
                                return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
                            };
                            if (!image.onclick) {
                                image.onclick = function() {
                                    return image.parentNode.focus();
                                };
                            } else {
                                var prevClickHandler = image.onclick;
                                image.onclick = function() {
                                    prevClickHandler();
                                    image.parentNode.focus();
                                };
                            }
                            if (!image.onload) {
                                if (_this.props.lazyLoad) {
                                    image.onload = function() {
                                        _this.adaptHeight();
                                        _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
                                    };
                                } else {
                                    image.onload = handler;
                                    image.onerror = function() {
                                        handler();
                                        _this.props.onLazyLoadError && _this.props.onLazyLoadError();
                                    };
                                }
                            }
                        });
                    };
                    _this.progressiveLazyLoad = function() {
                        var slidesToLoad = [];
                        var spec = _extends({}, _this.props, _this.state);
                        for (var index = _this.state.currentSlide; index < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index++) {
                            if (_this.state.lazyLoadedList.indexOf(index) < 0) {
                                slidesToLoad.push(index);
                                break;
                            }
                        }
                        for (var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--) {
                            if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
                                slidesToLoad.push(_index);
                                break;
                            }
                        }
                        if (slidesToLoad.length > 0) {
                            _this.setState(function(state) {
                                return {
                                    lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
                                };
                            });
                            if (_this.props.onLazyLoad) {
                                _this.props.onLazyLoad(slidesToLoad);
                            }
                        } else {
                            if (_this.lazyLoadTimer) {
                                clearInterval(_this.lazyLoadTimer);
                                delete _this.lazyLoadTimer;
                            }
                        }
                    };
                    _this.slideHandler = function(index) {
                        var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        var _this$props = _this.props,
                            asNavFor = _this$props.asNavFor,
                            beforeChange = _this$props.beforeChange,
                            onLazyLoad = _this$props.onLazyLoad,
                            speed = _this$props.speed,
                            afterChange = _this$props.afterChange;
                        var currentSlide = _this.state.currentSlide;
                        var _slideHandler = (0, _innerSliderUtils.slideHandler)(_extends({
                                index: index
                            }, _this.props, _this.state, {
                                trackRef: _this.track,
                                useCSS: _this.props.useCSS && !dontAnimate
                            })),
                            state = _slideHandler.state,
                            nextState = _slideHandler.nextState;
                        if (!state) return;
                        beforeChange && beforeChange(currentSlide, state.currentSlide);
                        var slidesToLoad = state.lazyLoadedList.filter(function(value) {
                            return _this.state.lazyLoadedList.indexOf(value) < 0;
                        });
                        onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);
                        _this.setState(state, function() {
                            asNavFor && asNavFor.innerSlider.state.currentSlide !== currentSlide && asNavFor.innerSlider.slideHandler(index);
                            if (!nextState) return;
                            _this.animationEndCallback = setTimeout(function() {
                                var animating = nextState.animating,
                                    firstBatch = _objectWithoutProperties(nextState, ["animating"]);
                                _this.setState(firstBatch, function() {
                                    _this.callbackTimers.push(setTimeout(function() {
                                        return _this.setState({
                                            animating: animating
                                        });
                                    }, 10));
                                    afterChange && afterChange(state.currentSlide);
                                    delete _this.animationEndCallback;
                                });
                            }, speed);
                        });
                    };
                    _this.changeSlide = function(options) {
                        var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        var spec = _extends({}, _this.props, _this.state);
                        var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
                        if (targetSlide !== 0 && !targetSlide) return;
                        if (dontAnimate === true) {
                            _this.slideHandler(targetSlide, dontAnimate);
                        } else {
                            _this.slideHandler(targetSlide);
                        }
                    };
                    _this.clickHandler = function(e) {
                        if (_this.clickable === false) {
                            e.stopPropagation();
                            e.preventDefault();
                        }
                        _this.clickable = true;
                    };
                    _this.keyHandler = function(e) {
                        var dir = (0, _innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
                        dir !== "" && _this.changeSlide({
                            message: dir
                        });
                    };
                    _this.selectHandler = function(options) {
                        _this.changeSlide(options);
                    };
                    _this.disableBodyScroll = function() {
                        var preventDefault = function preventDefault(e) {
                            e = e || window.event;
                            if (e.preventDefault) e.preventDefault();
                            e.returnValue = false;
                        };
                        window.ontouchmove = preventDefault;
                    };
                    _this.enableBodyScroll = function() {
                        window.ontouchmove = null;
                    };
                    _this.swipeStart = function(e) {
                        if (_this.props.verticalSwiping) {
                            _this.disableBodyScroll();
                        }
                        var state = (0, _innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
                        state !== "" && _this.setState(state);
                    };
                    _this.swipeMove = function(e) {
                        var state = (0, _innerSliderUtils.swipeMove)(e, _extends({}, _this.props, _this.state, {
                            trackRef: _this.track,
                            listRef: _this.list,
                            slideIndex: _this.state.currentSlide
                        }));
                        if (!state) return;
                        if (state["swiping"]) {
                            _this.clickable = false;
                        }
                        _this.setState(state);
                    };
                    _this.swipeEnd = function(e) {
                        var state = (0, _innerSliderUtils.swipeEnd)(e, _extends({}, _this.props, _this.state, {
                            trackRef: _this.track,
                            listRef: _this.list,
                            slideIndex: _this.state.currentSlide
                        }));
                        if (!state) return;
                        var triggerSlideHandler = state["triggerSlideHandler"];
                        delete state["triggerSlideHandler"];
                        _this.setState(state);
                        if (triggerSlideHandler === undefined) return;
                        _this.slideHandler(triggerSlideHandler);
                        if (_this.props.verticalSwiping) {
                            _this.enableBodyScroll();
                        }
                    };
                    _this.slickPrev = function() {
                        _this.callbackTimers.push(setTimeout(function() {
                            return _this.changeSlide({
                                message: "previous"
                            });
                        }, 0));
                    };
                    _this.slickNext = function() {
                        _this.callbackTimers.push(setTimeout(function() {
                            return _this.changeSlide({
                                message: "next"
                            });
                        }, 0));
                    };
                    _this.slickGoTo = function(slide) {
                        var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        slide = Number(slide);
                        if (isNaN(slide)) return "";
                        _this.callbackTimers.push(setTimeout(function() {
                            return _this.changeSlide({
                                message: "index",
                                index: slide,
                                currentSlide: _this.state.currentSlide
                            }, dontAnimate);
                        }, 0));
                    };
                    _this.play = function() {
                        var nextIndex;
                        if (_this.props.rtl) {
                            nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
                        } else {
                            if ((0, _innerSliderUtils.canGoNext)(_extends({}, _this.props, _this.state))) {
                                nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
                            } else {
                                return false;
                            }
                        }
                        _this.slideHandler(nextIndex);
                    };
                    _this.autoPlay = function(playType) {
                        if (_this.autoplayTimer) {
                            clearInterval(_this.autoplayTimer);
                        }
                        var autoplaying = _this.state.autoplaying;
                        if (playType === "update") {
                            if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
                                return;
                            }
                        } else if (playType === "leave") {
                            if (autoplaying === "paused" || autoplaying === "focused") {
                                return;
                            }
                        } else if (playType === "blur") {
                            if (autoplaying === "paused" || autoplaying === "hovered") {
                                return;
                            }
                        }
                        _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);
                        _this.setState({
                            autoplaying: "playing"
                        });
                    };
                    _this.pause = function(pauseType) {
                        if (_this.autoplayTimer) {
                            clearInterval(_this.autoplayTimer);
                            _this.autoplayTimer = null;
                        }
                        var autoplaying = _this.state.autoplaying;
                        if (pauseType === "paused") {
                            _this.setState({
                                autoplaying: "paused"
                            });
                        } else if (pauseType === "focused") {
                            if (autoplaying === "hovered" || autoplaying === "playing") {
                                _this.setState({
                                    autoplaying: "focused"
                                });
                            }
                        } else {
                            if (autoplaying === "playing") {
                                _this.setState({
                                    autoplaying: "hovered"
                                });
                            }
                        }
                    };
                    _this.onDotsOver = function() {
                        return _this.props.autoplay && _this.pause("hovered");
                    };
                    _this.onDotsLeave = function() {
                        return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
                    };
                    _this.onTrackOver = function() {
                        return _this.props.autoplay && _this.pause("hovered");
                    };
                    _this.onTrackLeave = function() {
                        return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
                    };
                    _this.onSlideFocus = function() {
                        return _this.props.autoplay && _this.pause("focused");
                    };
                    _this.onSlideBlur = function() {
                        return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
                    };
                    _this.render = function() {
                        var className = (0, _classnames2.default)("slick-slider", _this.props.className, {
                            "slick-vertical": _this.props.vertical,
                            "slick-initialized": true
                        });
                        var spec = _extends({}, _this.props, _this.state);
                        var trackProps = (0, _innerSliderUtils.extractObject)(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding"]);
                        var pauseOnHover = _this.props.pauseOnHover;
                        trackProps = _extends({}, trackProps, {
                            onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
                            onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
                            onMouseOver: pauseOnHover ? _this.onTrackOver : null,
                            focusOnSelect: _this.props.focusOnSelect ? _this.selectHandler : null
                        });
                        var dots;
                        if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
                            var dotProps = (0, _innerSliderUtils.extractObject)(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]);
                            var pauseOnDotsHover = _this.props.pauseOnDotsHover;
                            dotProps = _extends({}, dotProps, {
                                clickHandler: _this.changeSlide,
                                onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
                                onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
                                onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
                            });
                            dots = _react2.default.createElement(_dots.Dots, dotProps);
                        }
                        var prevArrow, nextArrow;
                        var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
                        arrowProps.clickHandler = _this.changeSlide;
                        if (_this.props.arrows) {
                            prevArrow = _react2.default.createElement(_arrows.PrevArrow, arrowProps);
                            nextArrow = _react2.default.createElement(_arrows.NextArrow, arrowProps);
                        }
                        var verticalHeightStyle = null;
                        if (_this.props.vertical) {
                            verticalHeightStyle = {
                                height: _this.state.listHeight
                            };
                        }
                        var centerPaddingStyle = null;
                        if (_this.props.vertical === false) {
                            if (_this.props.centerMode === true) {
                                centerPaddingStyle = {
                                    padding: "0px " + _this.props.centerPadding
                                };
                            }
                        } else {
                            if (_this.props.centerMode === true) {
                                centerPaddingStyle = {
                                    padding: _this.props.centerPadding + " 0px"
                                };
                            }
                        }
                        var listStyle = _extends({}, verticalHeightStyle, centerPaddingStyle);
                        var touchMove = _this.props.touchMove;
                        var listProps = {
                            className: "slick-list",
                            style: listStyle,
                            onClick: _this.clickHandler,
                            onMouseDown: touchMove ? _this.swipeStart : null,
                            onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
                            onMouseUp: touchMove ? _this.swipeEnd : null,
                            onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
                            onTouchStart: touchMove ? _this.swipeStart : null,
                            onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
                            onTouchEnd: touchMove ? _this.swipeEnd : null,
                            onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
                            onKeyDown: _this.props.accessibility ? _this.keyHandler : null
                        };
                        var innerSliderProps = {
                            className: className,
                            dir: "ltr"
                        };
                        if (_this.props.unslick) {
                            listProps = {
                                className: "slick-list"
                            };
                            innerSliderProps = {
                                className: className
                            };
                        }
                        return _react2.default.createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", _react2.default.createElement("div", _extends({
                            ref: _this.listRefHandler
                        }, listProps), _react2.default.createElement(_track.Track, _extends({
                            ref: _this.trackRefHandler
                        }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots : "");
                    };
                    _this.list = null;
                    _this.track = null;
                    _this.state = _extends({}, _initialState2.default, {
                        currentSlide: _this.props.initialSlide,
                        slideCount: _react2.default.Children.count(_this.props.children)
                    });
                    _this.callbackTimers = [];
                    _this.clickable = true;
                    _this.debouncedResize = null;
                    return _this;
                }
                return InnerSlider;
            }(_react2.default.Component);
        }),
        1433: (function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var initialState = {
                animating: false,
                autoplaying: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                dragging: false,
                edgeDragged: false,
                initialized: false,
                lazyLoadedList: [],
                listHeight: null,
                listWidth: null,
                scrolling: false,
                slideCount: null,
                slideHeight: null,
                slideWidth: null,
                swipeLeft: null,
                swiped: false,
                swiping: false,
                touchObject: {
                    startX: 0,
                    startY: 0,
                    curX: 0,
                    curY: 0
                },
                trackStyle: {},
                trackWidth: 0
            };
            exports.default = initialState;
        }),
        1434: (function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            exports.canUseDOM = exports.slidesOnLeft = exports.slidesOnRight = exports.siblingDirection = exports.getTotalSlides = exports.getPostClones = exports.getPreClones = exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = exports.checkSpecKeys = exports.getSlideCount = exports.checkNavigable = exports.getNavigableIndexes = exports.swipeEnd = exports.swipeMove = exports.swipeStart = exports.keyHandler = exports.changeSlide = exports.slideHandler = exports.initializedState = exports.extractObject = exports.canGoNext = exports.getSwipeDirection = exports.getHeight = exports.getWidth = exports.lazySlidesOnRight = exports.lazySlidesOnLeft = exports.lazyEndIndex = exports.lazyStartIndex = exports.getRequiredLazySlides = exports.getOnDemandLazySlides = undefined;
            var _extends = Object.assign || function(target) {
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
            var _react = __webpack_require__(352);
            var _react2 = _interopRequireDefault(_react);
            var _reactDom = __webpack_require__(355);
            var _reactDom2 = _interopRequireDefault(_reactDom);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            var getOnDemandLazySlides = exports.getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
                var onDemandSlides = [];
                var startIndex = lazyStartIndex(spec);
                var endIndex = lazyEndIndex(spec);
                for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
                    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
                        onDemandSlides.push(slideIndex);
                    }
                }
                return onDemandSlides;
            };
            var getRequiredLazySlides = exports.getRequiredLazySlides = function getRequiredLazySlides(spec) {
                var requiredSlides = [];
                var startIndex = lazyStartIndex(spec);
                var endIndex = lazyEndIndex(spec);
                for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
                    requiredSlides.push(slideIndex);
                }
                return requiredSlides;
            };
            var lazyStartIndex = exports.lazyStartIndex = function lazyStartIndex(spec) {
                return spec.currentSlide - lazySlidesOnLeft(spec);
            };
            var lazyEndIndex = exports.lazyEndIndex = function lazyEndIndex(spec) {
                return spec.currentSlide + lazySlidesOnRight(spec);
            };
            var lazySlidesOnLeft = exports.lazySlidesOnLeft = function lazySlidesOnLeft(spec) {
                return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
            };
            var lazySlidesOnRight = exports.lazySlidesOnRight = function lazySlidesOnRight(spec) {
                return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
            };
            var getWidth = exports.getWidth = function getWidth(elem) {
                return elem && elem.offsetWidth || 0;
            };
            var getHeight = exports.getHeight = function getHeight(elem) {
                return elem && elem.offsetHeight || 0;
            };
            var getSwipeDirection = exports.getSwipeDirection = function getSwipeDirection(touchObject) {
                var verticalSwiping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var xDist, yDist, r, swipeAngle;
                xDist = touchObject.startX - touchObject.curX;
                yDist = touchObject.startY - touchObject.curY;
                r = Math.atan2(yDist, xDist);
                swipeAngle = Math.round(r * 180 / Math.PI);
                if (swipeAngle < 0) {
                    swipeAngle = 360 - Math.abs(swipeAngle);
                }
                if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
                    return "left";
                }
                if (swipeAngle >= 135 && swipeAngle <= 225) {
                    return "right";
                }
                if (verticalSwiping === true) {
                    if (swipeAngle >= 35 && swipeAngle <= 135) {
                        return "up";
                    } else {
                        return "down";
                    }
                }
                return "vertical";
            };
            var canGoNext = exports.canGoNext = function canGoNext(spec) {
                var canGo = true;
                if (!spec.infinite) {
                    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
                        canGo = false;
                    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
                        canGo = false;
                    }
                }
                return canGo;
            };
            var extractObject = exports.extractObject = function extractObject(spec, keys) {
                var newObject = {};
                keys.forEach(function(key) {
                    return newObject[key] = spec[key];
                });
                return newObject;
            };
            var initializedState = exports.initializedState = function initializedState(spec) {
                var slideCount = _react2.default.Children.count(spec.children);
                var listWidth = Math.ceil(getWidth(_reactDom2.default.findDOMNode(spec.listRef)));
                var trackWidth = Math.ceil(getWidth(_reactDom2.default.findDOMNode(spec.trackRef)));
                var slideWidth = void 0;
                if (!spec.vertical) {
                    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;
                    if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
                        centerPaddingAdj *= listWidth / 100;
                    }
                    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
                } else {
                    slideWidth = listWidth;
                }
                var slideHeight = _reactDom2.default.findDOMNode(spec.listRef) && getHeight(_reactDom2.default.findDOMNode(spec.listRef).querySelector('[data-index="0"]'));
                var listHeight = slideHeight * spec.slidesToShow;
                var currentSlide = spec.currentSlide === undefined ? spec.initialSlide : spec.currentSlide;
                if (spec.rtl && spec.currentSlide === undefined) {
                    currentSlide = slideCount - 1 - spec.initialSlide;
                }
                var lazyLoadedList = spec.lazyLoadedList || [];
                var slidesToLoad = getOnDemandLazySlides({
                    currentSlide: currentSlide,
                    lazyLoadedList: lazyLoadedList
                }, spec);
                lazyLoadedList.concat(slidesToLoad);
                var state = {
                    slideCount: slideCount,
                    slideWidth: slideWidth,
                    listWidth: listWidth,
                    trackWidth: trackWidth,
                    currentSlide: currentSlide,
                    slideHeight: slideHeight,
                    listHeight: listHeight,
                    lazyLoadedList: lazyLoadedList
                };
                if (spec.autoplaying === null && spec.autoplay) {
                    state["autoplaying"] = "playing";
                }
                return state;
            };
            var slideHandler = exports.slideHandler = function slideHandler(spec) {
                var waitForAnimate = spec.waitForAnimate,
                    animating = spec.animating,
                    fade = spec.fade,
                    infinite = spec.infinite,
                    index = spec.index,
                    slideCount = spec.slideCount,
                    lazyLoadedList = spec.lazyLoadedList,
                    lazyLoad = spec.lazyLoad,
                    currentSlide = spec.currentSlide,
                    centerMode = spec.centerMode,
                    slidesToScroll = spec.slidesToScroll,
                    slidesToShow = spec.slidesToShow,
                    useCSS = spec.useCSS;
                if (waitForAnimate && animating) return {};
                var animationSlide = index,
                    finalSlide = void 0,
                    animationLeft = void 0,
                    finalLeft = void 0;
                var state = {},
                    nextState = {};
                if (fade) {
                    if (!infinite && (index < 0 || index >= slideCount)) return {};
                    if (index < 0) {
                        animationSlide = index + slideCount;
                    } else if (index >= slideCount) {
                        animationSlide = index - slideCount;
                    }
                    if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
                        lazyLoadedList.push(animationSlide);
                    }
                    state = {
                        animating: true,
                        currentSlide: animationSlide,
                        lazyLoadedList: lazyLoadedList
                    };
                    nextState = {
                        animating: false
                    };
                } else {
                    finalSlide = animationSlide;
                    if (animationSlide < 0) {
                        finalSlide = animationSlide + slideCount;
                        if (!infinite) finalSlide = 0;
                        else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
                    } else if (!canGoNext(spec) && animationSlide > currentSlide) {
                        animationSlide = finalSlide = currentSlide;
                    } else if (centerMode && animationSlide >= slideCount) {
                        animationSlide = infinite ? slideCount : slideCount - 1;
                        finalSlide = infinite ? 0 : slideCount - 1;
                    } else if (animationSlide >= slideCount) {
                        finalSlide = animationSlide - slideCount;
                        if (!infinite) finalSlide = slideCount - slidesToShow;
                        else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
                    }
                    animationLeft = getTrackLeft(_extends({}, spec, {
                        slideIndex: animationSlide
                    }));
                    finalLeft = getTrackLeft(_extends({}, spec, {
                        slideIndex: finalSlide
                    }));
                    if (!infinite) {
                        if (animationLeft === finalLeft) animationSlide = finalSlide;
                        animationLeft = finalLeft;
                    }
                    lazyLoad && lazyLoadedList.concat(getOnDemandLazySlides(_extends({}, spec, {
                        currentSlide: animationSlide
                    })));
                    if (!useCSS) {
                        state = {
                            currentSlide: finalSlide,
                            trackStyle: getTrackCSS(_extends({}, spec, {
                                left: finalLeft
                            })),
                            lazyLoadedList: lazyLoadedList
                        };
                    } else {
                        state = {
                            animating: true,
                            currentSlide: finalSlide,
                            trackStyle: getTrackAnimateCSS(_extends({}, spec, {
                                left: animationLeft
                            })),
                            lazyLoadedList: lazyLoadedList
                        };
                        nextState = {
                            animating: false,
                            currentSlide: finalSlide,
                            trackStyle: getTrackCSS(_extends({}, spec, {
                                left: finalLeft
                            })),
                            swipeLeft: null
                        };
                    }
                }
                return {
                    state: state,
                    nextState: nextState
                };
            };
            var changeSlide = exports.changeSlide = function changeSlide(spec, options) {
                var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
                var slidesToScroll = spec.slidesToScroll,
                    slidesToShow = spec.slidesToShow,
                    slideCount = spec.slideCount,
                    currentSlide = spec.currentSlide,
                    lazyLoad = spec.lazyLoad,
                    infinite = spec.infinite;
                unevenOffset = slideCount % slidesToScroll !== 0;
                indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;
                if (options.message === "previous") {
                    slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
                    targetSlide = currentSlide - slideOffset;
                    if (lazyLoad && !infinite) {
                        previousInt = currentSlide - slideOffset;
                        targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
                    }
                } else if (options.message === "next") {
                    slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
                    targetSlide = currentSlide + slideOffset;
                    if (lazyLoad && !infinite) {
                        targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
                    }
                } else if (options.message === "dots") {
                    targetSlide = options.index * options.slidesToScroll;
                    if (targetSlide === options.currentSlide) {
                        return null;
                    }
                } else if (options.message === "children") {
                    targetSlide = options.index;
                    if (targetSlide === options.currentSlide) {
                        return null;
                    }
                    if (infinite) {
                        var direction = siblingDirection(_extends({}, spec, {
                            targetSlide: targetSlide
                        }));
                        if (targetSlide > options.currentSlide && direction === "left") {
                            targetSlide = targetSlide - slideCount;
                        } else if (targetSlide < options.currentSlide && direction === "right") {
                            targetSlide = targetSlide + slideCount;
                        }
                    }
                } else if (options.message === "index") {
                    targetSlide = Number(options.index);
                    if (targetSlide === options.currentSlide) {
                        return null;
                    }
                }
                return targetSlide;
            };
            var keyHandler = exports.keyHandler = function keyHandler(e, accessibility, rtl) {
                if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
                if (e.keyCode === 37) return rtl ? "next" : "previous";
                if (e.keyCode === 39) return rtl ? "previous" : "next";
                return "";
            };
            var swipeStart = exports.swipeStart = function swipeStart(e, swipe, draggable) {
                e.target.tagName === "IMG" && e.preventDefault();
                if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
                return {
                    dragging: true,
                    touchObject: {
                        startX: e.touches ? e.touches[0].pageX : e.clientX,
                        startY: e.touches ? e.touches[0].pageY : e.clientY,
                        curX: e.touches ? e.touches[0].pageX : e.clientX,
                        curY: e.touches ? e.touches[0].pageY : e.clientY
                    }
                };
            };
            var swipeMove = exports.swipeMove = function swipeMove(e, spec) {
                var scrolling = spec.scrolling,
                    animating = spec.animating,
                    vertical = spec.vertical,
                    swipeToSlide = spec.swipeToSlide,
                    verticalSwiping = spec.verticalSwiping,
                    rtl = spec.rtl,
                    currentSlide = spec.currentSlide,
                    edgeFriction = spec.edgeFriction,
                    edgeDragged = spec.edgeDragged,
                    onEdge = spec.onEdge,
                    swiped = spec.swiped,
                    swiping = spec.swiping,
                    slideCount = spec.slideCount,
                    slidesToScroll = spec.slidesToScroll,
                    infinite = spec.infinite,
                    touchObject = spec.touchObject,
                    swipeEvent = spec.swipeEvent,
                    listHeight = spec.listHeight,
                    listWidth = spec.listWidth;
                if (scrolling) return;
                if (animating) return e.preventDefault();
                if (vertical && swipeToSlide && verticalSwiping) e.preventDefault();
                var swipeLeft = void 0,
                    state = {};
                var curLeft = getTrackLeft(spec);
                touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
                touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
                touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
                var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
                if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
                    return {
                        scrolling: true
                    };
                }
                if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
                var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
                if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
                var dotCount = Math.ceil(slideCount / slidesToScroll);
                var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
                var touchSwipeLength = touchObject.swipeLength;
                if (!infinite) {
                    if (currentSlide === 0 && swipeDirection === "right" || currentSlide + 1 >= dotCount && swipeDirection === "left" || !canGoNext(spec) && swipeDirection === "left") {
                        touchSwipeLength = touchObject.swipeLength * edgeFriction;
                        if (edgeDragged === false && onEdge) {
                            onEdge(swipeDirection);
                            state["edgeDragged"] = true;
                        }
                    }
                }
                if (!swiped && swipeEvent) {
                    swipeEvent(swipeDirection);
                    state["swiped"] = true;
                }
                if (!vertical) {
                    if (!rtl) {
                        swipeLeft = curLeft + touchSwipeLength * positionOffset;
                    } else {
                        swipeLeft = curLeft - touchSwipeLength * positionOffset;
                    }
                } else {
                    swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
                }
                if (verticalSwiping) {
                    swipeLeft = curLeft + touchSwipeLength * positionOffset;
                }
                state = _extends({}, state, {
                    touchObject: touchObject,
                    swipeLeft: swipeLeft,
                    trackStyle: getTrackCSS(_extends({}, spec, {
                        left: swipeLeft
                    }))
                });
                if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
                    return state;
                }
                if (touchObject.swipeLength > 10) {
                    state["swiping"] = true;
                    e.preventDefault();
                }
                return state;
            };
            var swipeEnd = exports.swipeEnd = function swipeEnd(e, spec) {
                var dragging = spec.dragging,
                    swipe = spec.swipe,
                    touchObject = spec.touchObject,
                    listWidth = spec.listWidth,
                    touchThreshold = spec.touchThreshold,
                    verticalSwiping = spec.verticalSwiping,
                    listHeight = spec.listHeight,
                    currentSlide = spec.currentSlide,
                    swipeToSlide = spec.swipeToSlide,
                    scrolling = spec.scrolling,
                    onSwipe = spec.onSwipe;
                if (!dragging) {
                    if (swipe) e.preventDefault();
                    return {};
                }
                var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
                var swipeDirection = getSwipeDirection(touchObject, verticalSwiping);
                var state = {
                    dragging: false,
                    edgeDragged: false,
                    scrolling: false,
                    swiping: false,
                    swiped: false,
                    swipeLeft: null,
                    touchObject: {}
                };
                if (scrolling) {
                    return state;
                }
                if (!touchObject.swipeLength) {
                    return state;
                }
                if (touchObject.swipeLength > minSwipe) {
                    e.preventDefault();
                    if (onSwipe) {
                        onSwipe(swipeDirection);
                    }
                    var slideCount = void 0,
                        newSlide = void 0;
                    switch (swipeDirection) {
                        case "left":
                        case "up":
                            newSlide = currentSlide + getSlideCount(spec);
                            slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
                            state["currentDirection"] = 0;
                            break;
                        case "right":
                        case "down":
                            newSlide = currentSlide - getSlideCount(spec);
                            slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
                            state["currentDirection"] = 1;
                            break;
                        default:
                            slideCount = currentSlide;
                    }
                    state["triggerSlideHandler"] = slideCount;
                } else {
                    var currentLeft = getTrackLeft(spec);
                    state["trackStyle"] = getTrackAnimateCSS(_extends({}, spec, {
                        left: currentLeft
                    }));
                }
                return state;
            };
            var getNavigableIndexes = exports.getNavigableIndexes = function getNavigableIndexes(spec) {
                var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
                var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
                var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
                var indexes = [];
                while (breakpoint < max) {
                    indexes.push(breakpoint);
                    breakpoint = counter + spec.slidesToScroll;
                    counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
                }
                return indexes;
            };
            var checkNavigable = exports.checkNavigable = function checkNavigable(spec, index) {
                var navigables = getNavigableIndexes(spec);
                var prevNavigable = 0;
                if (index > navigables[navigables.length - 1]) {
                    index = navigables[navigables.length - 1];
                } else {
                    for (var n in navigables) {
                        if (index < navigables[n]) {
                            index = prevNavigable;
                            break;
                        }
                        prevNavigable = navigables[n];
                    }
                }
                return index;
            };
            var getSlideCount = exports.getSlideCount = function getSlideCount(spec) {
                var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;
                if (spec.swipeToSlide) {
                    var swipedSlide = void 0;
                    var slickList = _reactDom2.default.findDOMNode(spec.listRef);
                    var slides = slickList.querySelectorAll(".slick-slide");
                    Array.from(slides).every(function(slide) {
                        if (!spec.vertical) {
                            if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
                                swipedSlide = slide;
                                return false;
                            }
                        } else {
                            if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
                                swipedSlide = slide;
                                return false;
                            }
                        }
                        return true;
                    });
                    if (!swipedSlide) {
                        return 0;
                    }
                    var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
                    var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
                    return slidesTraversed;
                } else {
                    return spec.slidesToScroll;
                }
            };
            var checkSpecKeys = exports.checkSpecKeys = function checkSpecKeys(spec, keysArray) {
                return keysArray.reduce(function(value, key) {
                    return value && spec.hasOwnProperty(key);
                }, true) ? null : console.error("Keys Missing:", spec);
            };
            var getTrackCSS = exports.getTrackCSS = function getTrackCSS(spec) {
                checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
                var trackWidth = void 0,
                    trackHeight = void 0;
                var trackChildren = spec.slideCount + 2 * spec.slidesToShow;
                if (!spec.vertical) {
                    trackWidth = getTotalSlides(spec) * spec.slideWidth;
                } else {
                    trackHeight = trackChildren * spec.slideHeight;
                }
                var style = {
                    opacity: 1,
                    transition: "",
                    WebkitTransition: ""
                };
                if (spec.useTransform) {
                    var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
                    var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
                    var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
                    style = _extends({}, style, {
                        WebkitTransform: WebkitTransform,
                        transform: transform,
                        msTransform: msTransform
                    });
                } else {
                    if (spec.vertical) {
                        style["top"] = spec.left;
                    } else {
                        style["left"] = spec.left;
                    }
                }
                if (spec.fade) style = {
                    opacity: 1
                };
                if (trackWidth) style.width = trackWidth;
                if (trackHeight) style.height = trackHeight;
                if (window && !window.addEventListener && window.attachEvent) {
                    if (!spec.vertical) {
                        style.marginLeft = spec.left + "px";
                    } else {
                        style.marginTop = spec.left + "px";
                    }
                }
                return style;
            };
            var getTrackAnimateCSS = exports.getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
                checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
                var style = getTrackCSS(spec);
                if (spec.useTransform) {
                    style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
                    style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
                } else {
                    if (spec.vertical) {
                        style.transition = "top " + spec.speed + "ms " + spec.cssEase;
                    } else {
                        style.transition = "left " + spec.speed + "ms " + spec.cssEase;
                    }
                }
                return style;
            };
            var getTrackLeft = exports.getTrackLeft = function getTrackLeft(spec) {
                if (spec.unslick) {
                    return 0;
                }
                checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
                var slideIndex = spec.slideIndex,
                    trackRef = spec.trackRef,
                    infinite = spec.infinite,
                    centerMode = spec.centerMode,
                    slideCount = spec.slideCount,
                    slidesToShow = spec.slidesToShow,
                    slidesToScroll = spec.slidesToScroll,
                    slideWidth = spec.slideWidth,
                    listWidth = spec.listWidth,
                    variableWidth = spec.variableWidth,
                    slideHeight = spec.slideHeight,
                    fade = spec.fade,
                    vertical = spec.vertical;
                var slideOffset = 0;
                var targetLeft;
                var targetSlide;
                var verticalOffset = 0;
                if (fade || spec.slideCount === 1) {
                    return 0;
                }
                var slidesToOffset = 0;
                if (infinite) {
                    slidesToOffset = -getPreClones(spec);
                    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
                        slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
                    }
                    if (centerMode) {
                        slidesToOffset += parseInt(slidesToShow / 2);
                    }
                } else {
                    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
                        slidesToOffset = slidesToShow - slideCount % slidesToScroll;
                    }
                    if (centerMode) {
                        slidesToOffset = parseInt(slidesToShow / 2);
                    }
                }
                slideOffset = slidesToOffset * slideWidth;
                verticalOffset = slidesToOffset * slideHeight;
                if (!vertical) {
                    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
                } else {
                    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
                }
                if (variableWidth === true) {
                    var targetSlideIndex;
                    var trackElem = _reactDom2.default.findDOMNode(trackRef);
                    targetSlideIndex = slideIndex + getPreClones(spec);
                    targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
                    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
                    if (centerMode === true) {
                        targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
                        targetSlide = trackElem && trackElem.children[targetSlideIndex];
                        targetLeft = 0;
                        for (var slide = 0; slide < targetSlideIndex; slide++) {
                            targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
                        }
                        targetLeft -= parseInt(spec.centerPadding);
                        targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
                    }
                }
                return targetLeft;
            };
            var getPreClones = exports.getPreClones = function getPreClones(spec) {
                if (spec.unslick || !spec.infinite) {
                    return 0;
                }
                if (spec.variableWidth) {
                    return spec.slideCount;
                }
                return spec.slidesToShow + (spec.centerMode ? 1 : 0);
            };
            var getPostClones = exports.getPostClones = function getPostClones(spec) {
                if (spec.unslick || !spec.infinite) {
                    return 0;
                }
                return spec.slideCount;
            };
            var getTotalSlides = exports.getTotalSlides = function getTotalSlides(spec) {
                return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
            };
            var siblingDirection = exports.siblingDirection = function siblingDirection(spec) {
                if (spec.targetSlide > spec.currentSlide) {
                    if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
                        return "left";
                    }
                    return "right";
                } else {
                    if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
                        return "right";
                    }
                    return "left";
                }
            };
            var slidesOnRight = exports.slidesOnRight = function slidesOnRight(_ref) {
                var slidesToShow = _ref.slidesToShow,
                    centerMode = _ref.centerMode,
                    rtl = _ref.rtl,
                    centerPadding = _ref.centerPadding;
                if (centerMode) {
                    var right = (slidesToShow - 1) / 2 + 1;
                    if (parseInt(centerPadding) > 0) right += 1;
                    if (rtl && slidesToShow % 2 === 0) right += 1;
                    return right;
                }
                if (rtl) {
                    return 0;
                }
                return slidesToShow - 1;
            };
            var slidesOnLeft = exports.slidesOnLeft = function slidesOnLeft(_ref2) {
                var slidesToShow = _ref2.slidesToShow,
                    centerMode = _ref2.centerMode,
                    rtl = _ref2.rtl,
                    centerPadding = _ref2.centerPadding;
                if (centerMode) {
                    var left = (slidesToShow - 1) / 2 + 1;
                    if (parseInt(centerPadding) > 0) left += 1;
                    if (!rtl && slidesToShow % 2 === 0) left += 1;
                    return left;
                }
                if (rtl) {
                    return slidesToShow - 1;
                }
                return 0;
            };
            var canUseDOM = exports.canUseDOM = function canUseDOM() {
                return !!(typeof window !== "undefined" && window.document && window.document.createElement);
            };
        }),
        1435: (function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            exports.Track = undefined;
            var _extends = Object.assign || function(target) {
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
            var _react = __webpack_require__(352);
            var _react2 = _interopRequireDefault(_react);
            var _classnames = __webpack_require__(516);
            var _classnames2 = _interopRequireDefault(_classnames);
            var _innerSliderUtils = __webpack_require__(1434);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var getSlideClasses = function getSlideClasses(spec) {
                var slickActive, slickCenter, slickCloned;
                var centerOffset, index;
                if (spec.rtl) {
                    index = spec.slideCount - 1 - spec.index;
                } else {
                    index = spec.index;
                }
                slickCloned = index < 0 || index >= spec.slideCount;
                if (spec.centerMode) {
                    centerOffset = Math.floor(spec.slidesToShow / 2);
                    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
                    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
                        slickActive = true;
                    }
                } else {
                    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
                }
                var slickCurrent = index === spec.currentSlide;
                return {
                    "slick-slide": true,
                    "slick-active": slickActive,
                    "slick-center": slickCenter,
                    "slick-cloned": slickCloned,
                    "slick-current": slickCurrent
                };
            };
            var getSlideStyle = function getSlideStyle(spec) {
                var style = {};
                if (spec.variableWidth === undefined || spec.variableWidth === false) {
                    style.width = spec.slideWidth;
                }
                if (spec.fade) {
                    style.position = "relative";
                    if (spec.vertical) {
                        style.top = -spec.index * parseInt(spec.slideHeight);
                    } else {
                        style.left = -spec.index * parseInt(spec.slideWidth);
                    }
                    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
                    style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
                    style.WebkitTransition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
                }
                return style;
            };
            var getKey = function getKey(child, fallbackKey) {
                return child.key || fallbackKey;
            };
            var renderSlides = function renderSlides(spec) {
                var key;
                var slides = [];
                var preCloneSlides = [];
                var postCloneSlides = [];
                var childrenCount = _react2.default.Children.count(spec.children);
                var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
                var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);
                _react2.default.Children.forEach(spec.children, function(elem, index) {
                    var child = void 0;
                    var childOnClickOptions = {
                        message: "children",
                        index: index,
                        slidesToScroll: spec.slidesToScroll,
                        currentSlide: spec.currentSlide
                    };
                    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
                        child = elem;
                    } else {
                        child = _react2.default.createElement("div", null);
                    }
                    var childStyle = getSlideStyle(_extends({}, spec, {
                        index: index
                    }));
                    var slideClass = child.props.className || "";
                    var slideClasses = getSlideClasses(_extends({}, spec, {
                        index: index
                    }));
                    slides.push(_react2.default.cloneElement(child, {
                        key: "original" + getKey(child, index),
                        "data-index": index,
                        className: (0, _classnames2.default)(slideClasses, slideClass),
                        tabIndex: "-1",
                        "aria-hidden": !slideClasses["slick-active"],
                        style: _extends({
                            outline: "none"
                        }, child.props.style || {}, childStyle),
                        onClick: function onClick(e) {
                            child.props && child.props.onClick && child.props.onClick(e);
                            if (spec.focusOnSelect) {
                                spec.focusOnSelect(childOnClickOptions);
                            }
                        }
                    }));
                    if (spec.infinite && spec.fade === false) {
                        var preCloneNo = childrenCount - index;
                        if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec) && childrenCount !== spec.slidesToShow) {
                            key = -preCloneNo;
                            if (key >= startIndex) {
                                child = elem;
                            }
                            slideClasses = getSlideClasses(_extends({}, spec, {
                                index: key
                            }));
                            preCloneSlides.push(_react2.default.cloneElement(child, {
                                key: "precloned" + getKey(child, key),
                                "data-index": key,
                                tabIndex: "-1",
                                className: (0, _classnames2.default)(slideClasses, slideClass),
                                "aria-hidden": !slideClasses["slick-active"],
                                style: _extends({}, child.props.style || {}, childStyle),
                                onClick: function onClick(e) {
                                    child.props && child.props.onClick && child.props.onClick(e);
                                    if (spec.focusOnSelect) {
                                        spec.focusOnSelect(childOnClickOptions);
                                    }
                                }
                            }));
                        }
                        if (childrenCount !== spec.slidesToShow) {
                            key = childrenCount + index;
                            if (key < endIndex) {
                                child = elem;
                            }
                            slideClasses = getSlideClasses(_extends({}, spec, {
                                index: key
                            }));
                            postCloneSlides.push(_react2.default.cloneElement(child, {
                                key: "postcloned" + getKey(child, key),
                                "data-index": key,
                                tabIndex: "-1",
                                className: (0, _classnames2.default)(slideClasses, slideClass),
                                "aria-hidden": !slideClasses["slick-active"],
                                style: _extends({}, child.props.style || {}, childStyle),
                                onClick: function onClick(e) {
                                    child.props && child.props.onClick && child.props.onClick(e);
                                    if (spec.focusOnSelect) {
                                        spec.focusOnSelect(childOnClickOptions);
                                    }
                                }
                            }));
                        }
                    }
                });
                if (spec.rtl) {
                    return preCloneSlides.concat(slides, postCloneSlides).reverse();
                } else {
                    return preCloneSlides.concat(slides, postCloneSlides);
                }
            };
            var Track = exports.Track = function(_React$PureComponent) {
                _inherits(Track, _React$PureComponent);

                function Track() {
                    _classCallCheck(this, Track);
                    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
                }
                Track.prototype.render = function render() {
                    var slides = renderSlides(this.props);
                    var _props = this.props,
                        onMouseEnter = _props.onMouseEnter,
                        onMouseOver = _props.onMouseOver,
                        onMouseLeave = _props.onMouseLeave;
                    var mouseEvents = {
                        onMouseEnter: onMouseEnter,
                        onMouseOver: onMouseOver,
                        onMouseLeave: onMouseLeave
                    };
                    return _react2.default.createElement("div", _extends({
                        className: "slick-track",
                        style: this.props.trackStyle
                    }, mouseEvents), slides);
                };
                return Track;
            }(_react2.default.PureComponent);
        }),
        1436: (function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            exports.Dots = undefined;
            var _extends = Object.assign || function(target) {
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
            var _react = __webpack_require__(352);
            var _react2 = _interopRequireDefault(_react);
            var _classnames = __webpack_require__(516);
            var _classnames2 = _interopRequireDefault(_classnames);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var getDotCount = function getDotCount(spec) {
                var dots;
                if (spec.infinite) {
                    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
                } else {
                    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
                }
                return dots;
            };
            var Dots = exports.Dots = function(_React$PureComponent) {
                _inherits(Dots, _React$PureComponent);

                function Dots() {
                    _classCallCheck(this, Dots);
                    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
                }
                Dots.prototype.clickHandler = function clickHandler(options, e) {
                    e.preventDefault();
                    this.props.clickHandler(options);
                };
                Dots.prototype.render = function render() {
                    var _this2 = this;
                    var dotCount = getDotCount({
                        slideCount: this.props.slideCount,
                        slidesToScroll: this.props.slidesToScroll,
                        slidesToShow: this.props.slidesToShow,
                        infinite: this.props.infinite
                    });
                    var _props = this.props,
                        onMouseEnter = _props.onMouseEnter,
                        onMouseOver = _props.onMouseOver,
                        onMouseLeave = _props.onMouseLeave;
                    var mouseEvents = {
                        onMouseEnter: onMouseEnter,
                        onMouseOver: onMouseOver,
                        onMouseLeave: onMouseLeave
                    };
                    var dots = Array.apply(null, Array(dotCount + 1).join("0").split("")).map(function(x, i) {
                        var leftBound = i * _this2.props.slidesToScroll;
                        var rightBound = i * _this2.props.slidesToScroll + (_this2.props.slidesToScroll - 1);
                        var className = (0, _classnames2.default)({
                            "slick-active": _this2.props.currentSlide >= leftBound && _this2.props.currentSlide <= rightBound
                        });
                        var dotOptions = {
                            message: "dots",
                            index: i,
                            slidesToScroll: _this2.props.slidesToScroll,
                            currentSlide: _this2.props.currentSlide
                        };
                        var onClick = _this2.clickHandler.bind(_this2, dotOptions);
                        return _react2.default.createElement("li", {
                            key: i,
                            className: className
                        }, _react2.default.cloneElement(_this2.props.customPaging(i), {
                            onClick: onClick
                        }));
                    });
                    return _react2.default.cloneElement(this.props.appendDots(dots), _extends({
                        className: this.props.dotsClass
                    }, mouseEvents));
                };
                return Dots;
            }(_react2.default.PureComponent);
        }),
        1437: (function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            exports.NextArrow = exports.PrevArrow = undefined;
            var _extends = Object.assign || function(target) {
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
            var _react = __webpack_require__(352);
            var _react2 = _interopRequireDefault(_react);
            var _classnames = __webpack_require__(516);
            var _classnames2 = _interopRequireDefault(_classnames);
            var _innerSliderUtils = __webpack_require__(1434);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var PrevArrow = exports.PrevArrow = function(_React$PureComponent) {
                _inherits(PrevArrow, _React$PureComponent);

                function PrevArrow() {
                    _classCallCheck(this, PrevArrow);
                    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
                }
                PrevArrow.prototype.clickHandler = function clickHandler(options, e) {
                    if (e) {
                        e.preventDefault();
                    }
                    this.props.clickHandler(options, e);
                };
                PrevArrow.prototype.render = function render() {
                    var prevClasses = {
                        "slick-arrow": true,
                        "slick-prev": true
                    };
                    var prevHandler = this.clickHandler.bind(this, {
                        message: "previous"
                    });
                    if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
                        prevClasses["slick-disabled"] = true;
                        prevHandler = null;
                    }
                    var prevArrowProps = {
                        key: "0",
                        "data-role": "none",
                        className: (0, _classnames2.default)(prevClasses),
                        style: {
                            display: "block"
                        },
                        onClick: prevHandler
                    };
                    var customProps = {
                        currentSlide: this.props.currentSlide,
                        slideCount: this.props.slideCount
                    };
                    var prevArrow = void 0;
                    if (this.props.prevArrow) {
                        prevArrow = _react2.default.cloneElement(this.props.prevArrow, _extends({}, prevArrowProps, customProps));
                    } else {
                        prevArrow = _react2.default.createElement("button", _extends({
                            key: "0",
                            type: "button"
                        }, prevArrowProps), " ", "Previous");
                    }
                    return prevArrow;
                };
                return PrevArrow;
            }(_react2.default.PureComponent);
            var NextArrow = exports.NextArrow = function(_React$PureComponent2) {
                _inherits(NextArrow, _React$PureComponent2);

                function NextArrow() {
                    _classCallCheck(this, NextArrow);
                    return _possibleConstructorReturn(this, _React$PureComponent2.apply(this, arguments));
                }
                NextArrow.prototype.clickHandler = function clickHandler(options, e) {
                    if (e) {
                        e.preventDefault();
                    }
                    this.props.clickHandler(options, e);
                };
                NextArrow.prototype.render = function render() {
                    var nextClasses = {
                        "slick-arrow": true,
                        "slick-next": true
                    };
                    var nextHandler = this.clickHandler.bind(this, {
                        message: "next"
                    });
                    if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
                        nextClasses["slick-disabled"] = true;
                        nextHandler = null;
                    }
                    var nextArrowProps = {
                        key: "1",
                        "data-role": "none",
                        className: (0, _classnames2.default)(nextClasses),
                        style: {
                            display: "block"
                        },
                        onClick: nextHandler
                    };
                    var customProps = {
                        currentSlide: this.props.currentSlide,
                        slideCount: this.props.slideCount
                    };
                    var nextArrow = void 0;
                    if (this.props.nextArrow) {
                        nextArrow = _react2.default.cloneElement(this.props.nextArrow, _extends({}, nextArrowProps, customProps));
                    } else {
                        nextArrow = _react2.default.createElement("button", _extends({
                            key: "1",
                            type: "button"
                        }, nextArrowProps), " ", "Next");
                    }
                    return nextArrow;
                };
                return NextArrow;
            }(_react2.default.PureComponent);
        }),
        1438: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            (function(global) {
                var MapShim = (function() {
                    if (typeof Map !== 'undefined') {
                        return Map;
                    }

                    function getIndex(arr, key) {
                        var result = -1;
                        arr.some(function(entry, index) {
                            if (entry[0] === key) {
                                result = index;
                                return true;
                            }
                            return false;
                        });
                        return result;
                    }
                    return (function() {
                        function class_1() {
                            this.__entries__ = [];
                        }
                        Object.defineProperty(class_1.prototype, "size", {
                            get: function() {
                                return this.__entries__.length;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        class_1.prototype.get = function(key) {
                            var index = getIndex(this.__entries__, key);
                            var entry = this.__entries__[index];
                            return entry && entry[1];
                        };
                        class_1.prototype.set = function(key, value) {
                            var index = getIndex(this.__entries__, key);
                            if (~index) {
                                this.__entries__[index][1] = value;
                            } else {
                                this.__entries__.push([key, value]);
                            }
                        };
                        class_1.prototype.delete = function(key) {
                            var entries = this.__entries__;
                            var index = getIndex(entries, key);
                            if (~index) {
                                entries.splice(index, 1);
                            }
                        };
                        class_1.prototype.has = function(key) {
                            return !!~getIndex(this.__entries__, key);
                        };
                        class_1.prototype.clear = function() {
                            this.__entries__.splice(0);
                        };
                        class_1.prototype.forEach = function(callback, ctx) {
                            if (ctx === void 0) {
                                ctx = null;
                            }
                            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                                var entry = _a[_i];
                                callback.call(ctx, entry[1], entry[0]);
                            }
                        };
                        return class_1;
                    }());
                })();
                var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;
                var global$1 = (function() {
                    if (typeof global !== 'undefined' && global.Math === Math) {
                        return global;
                    }
                    if (typeof self !== 'undefined' && self.Math === Math) {
                        return self;
                    }
                    if (typeof window !== 'undefined' && window.Math === Math) {
                        return window;
                    }
                    return Function('return this')();
                })();
                var requestAnimationFrame$1 = (function() {
                    if (typeof requestAnimationFrame === 'function') {
                        return requestAnimationFrame.bind(global$1);
                    }
                    return function(callback) {
                        return setTimeout(function() {
                            return callback(Date.now());
                        }, 1000 / 60);
                    };
                })();
                var trailingTimeout = 2;

                function throttle(callback, delay) {
                    var leadingCall = false,
                        trailingCall = false,
                        lastCallTime = 0;

                    function resolvePending() {
                        if (leadingCall) {
                            leadingCall = false;
                            callback();
                        }
                        if (trailingCall) {
                            proxy();
                        }
                    }

                    function timeoutCallback() {
                        requestAnimationFrame$1(resolvePending);
                    }

                    function proxy() {
                        var timeStamp = Date.now();
                        if (leadingCall) {
                            if (timeStamp - lastCallTime < trailingTimeout) {
                                return;
                            }
                            trailingCall = true;
                        } else {
                            leadingCall = true;
                            trailingCall = false;
                            setTimeout(timeoutCallback, delay);
                        }
                        lastCallTime = timeStamp;
                    }
                    return proxy;
                }
                var REFRESH_DELAY = 20;
                var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
                var mutationObserverSupported = typeof MutationObserver !== 'undefined';
                var ResizeObserverController = (function() {
                    function ResizeObserverController() {
                        this.connected_ = false;
                        this.mutationEventsAdded_ = false;
                        this.mutationsObserver_ = null;
                        this.observers_ = [];
                        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
                        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
                    }
                    ResizeObserverController.prototype.addObserver = function(observer) {
                        if (!~this.observers_.indexOf(observer)) {
                            this.observers_.push(observer);
                        }
                        if (!this.connected_) {
                            this.connect_();
                        }
                    };
                    ResizeObserverController.prototype.removeObserver = function(observer) {
                        var observers = this.observers_;
                        var index = observers.indexOf(observer);
                        if (~index) {
                            observers.splice(index, 1);
                        }
                        if (!observers.length && this.connected_) {
                            this.disconnect_();
                        }
                    };
                    ResizeObserverController.prototype.refresh = function() {
                        var changesDetected = this.updateObservers_();
                        if (changesDetected) {
                            this.refresh();
                        }
                    };
                    ResizeObserverController.prototype.updateObservers_ = function() {
                        var activeObservers = this.observers_.filter(function(observer) {
                            return observer.gatherActive(), observer.hasActive();
                        });
                        activeObservers.forEach(function(observer) {
                            return observer.broadcastActive();
                        });
                        return activeObservers.length > 0;
                    };
                    ResizeObserverController.prototype.connect_ = function() {
                        if (!isBrowser || this.connected_) {
                            return;
                        }
                        document.addEventListener('transitionend', this.onTransitionEnd_);
                        window.addEventListener('resize', this.refresh);
                        if (mutationObserverSupported) {
                            this.mutationsObserver_ = new MutationObserver(this.refresh);
                            this.mutationsObserver_.observe(document, {
                                attributes: true,
                                childList: true,
                                characterData: true,
                                subtree: true
                            });
                        } else {
                            document.addEventListener('DOMSubtreeModified', this.refresh);
                            this.mutationEventsAdded_ = true;
                        }
                        this.connected_ = true;
                    };
                    ResizeObserverController.prototype.disconnect_ = function() {
                        if (!isBrowser || !this.connected_) {
                            return;
                        }
                        document.removeEventListener('transitionend', this.onTransitionEnd_);
                        window.removeEventListener('resize', this.refresh);
                        if (this.mutationsObserver_) {
                            this.mutationsObserver_.disconnect();
                        }
                        if (this.mutationEventsAdded_) {
                            document.removeEventListener('DOMSubtreeModified', this.refresh);
                        }
                        this.mutationsObserver_ = null;
                        this.mutationEventsAdded_ = false;
                        this.connected_ = false;
                    };
                    ResizeObserverController.prototype.onTransitionEnd_ = function(_a) {
                        var _b = _a.propertyName,
                            propertyName = _b === void 0 ? '' : _b;
                        var isReflowProperty = transitionKeys.some(function(key) {
                            return !!~propertyName.indexOf(key);
                        });
                        if (isReflowProperty) {
                            this.refresh();
                        }
                    };
                    ResizeObserverController.getInstance = function() {
                        if (!this.instance_) {
                            this.instance_ = new ResizeObserverController();
                        }
                        return this.instance_;
                    };
                    ResizeObserverController.instance_ = null;
                    return ResizeObserverController;
                }());
                var defineConfigurable = (function(target, props) {
                    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
                        var key = _a[_i];
                        Object.defineProperty(target, key, {
                            value: props[key],
                            enumerable: false,
                            writable: false,
                            configurable: true
                        });
                    }
                    return target;
                });
                var getWindowOf = (function(target) {
                    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
                    return ownerGlobal || global$1;
                });
                var emptyRect = createRectInit(0, 0, 0, 0);

                function toFloat(value) {
                    return parseFloat(value) || 0;
                }

                function getBordersSize(styles) {
                    var positions = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        positions[_i - 1] = arguments[_i];
                    }
                    return positions.reduce(function(size, position) {
                        var value = styles['border-' + position + '-width'];
                        return size + toFloat(value);
                    }, 0);
                }

                function getPaddings(styles) {
                    var positions = ['top', 'right', 'bottom', 'left'];
                    var paddings = {};
                    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
                        var position = positions_1[_i];
                        var value = styles['padding-' + position];
                        paddings[position] = toFloat(value);
                    }
                    return paddings;
                }

                function getSVGContentRect(target) {
                    var bbox = target.getBBox();
                    return createRectInit(0, 0, bbox.width, bbox.height);
                }

                function getHTMLElementContentRect(target) {
                    var clientWidth = target.clientWidth,
                        clientHeight = target.clientHeight;
                    if (!clientWidth && !clientHeight) {
                        return emptyRect;
                    }
                    var styles = getWindowOf(target).getComputedStyle(target);
                    var paddings = getPaddings(styles);
                    var horizPad = paddings.left + paddings.right;
                    var vertPad = paddings.top + paddings.bottom;
                    var width = toFloat(styles.width),
                        height = toFloat(styles.height);
                    if (styles.boxSizing === 'border-box') {
                        if (Math.round(width + horizPad) !== clientWidth) {
                            width -= getBordersSize(styles, 'left', 'right') + horizPad;
                        }
                        if (Math.round(height + vertPad) !== clientHeight) {
                            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
                        }
                    }
                    if (!isDocumentElement(target)) {
                        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
                        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
                        if (Math.abs(vertScrollbar) !== 1) {
                            width -= vertScrollbar;
                        }
                        if (Math.abs(horizScrollbar) !== 1) {
                            height -= horizScrollbar;
                        }
                    }
                    return createRectInit(paddings.left, paddings.top, width, height);
                }
                var isSVGGraphicsElement = (function() {
                    if (typeof SVGGraphicsElement !== 'undefined') {
                        return function(target) {
                            return target instanceof getWindowOf(target).SVGGraphicsElement;
                        };
                    }
                    return function(target) {
                        return (target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function');
                    };
                })();

                function isDocumentElement(target) {
                    return target === getWindowOf(target).document.documentElement;
                }

                function getContentRect(target) {
                    if (!isBrowser) {
                        return emptyRect;
                    }
                    if (isSVGGraphicsElement(target)) {
                        return getSVGContentRect(target);
                    }
                    return getHTMLElementContentRect(target);
                }

                function createReadOnlyRect(_a) {
                    var x = _a.x,
                        y = _a.y,
                        width = _a.width,
                        height = _a.height;
                    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
                    var rect = Object.create(Constr.prototype);
                    defineConfigurable(rect, {
                        x: x,
                        y: y,
                        width: width,
                        height: height,
                        top: y,
                        right: x + width,
                        bottom: height + y,
                        left: x
                    });
                    return rect;
                }

                function createRectInit(x, y, width, height) {
                    return {
                        x: x,
                        y: y,
                        width: width,
                        height: height
                    };
                }
                var ResizeObservation = (function() {
                    function ResizeObservation(target) {
                        this.broadcastWidth = 0;
                        this.broadcastHeight = 0;
                        this.contentRect_ = createRectInit(0, 0, 0, 0);
                        this.target = target;
                    }
                    ResizeObservation.prototype.isActive = function() {
                        var rect = getContentRect(this.target);
                        this.contentRect_ = rect;
                        return (rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight);
                    };
                    ResizeObservation.prototype.broadcastRect = function() {
                        var rect = this.contentRect_;
                        this.broadcastWidth = rect.width;
                        this.broadcastHeight = rect.height;
                        return rect;
                    };
                    return ResizeObservation;
                }());
                var ResizeObserverEntry = (function() {
                    function ResizeObserverEntry(target, rectInit) {
                        var contentRect = createReadOnlyRect(rectInit);
                        defineConfigurable(this, {
                            target: target,
                            contentRect: contentRect
                        });
                    }
                    return ResizeObserverEntry;
                }());
                var ResizeObserverSPI = (function() {
                    function ResizeObserverSPI(callback, controller, callbackCtx) {
                        this.activeObservations_ = [];
                        this.observations_ = new MapShim();
                        if (typeof callback !== 'function') {
                            throw new TypeError('The callback provided as parameter 1 is not a function.');
                        }
                        this.callback_ = callback;
                        this.controller_ = controller;
                        this.callbackCtx_ = callbackCtx;
                    }
                    ResizeObserverSPI.prototype.observe = function(target) {
                        if (!arguments.length) {
                            throw new TypeError('1 argument required, but only 0 present.');
                        }
                        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
                            return;
                        }
                        if (!(target instanceof getWindowOf(target).Element)) {
                            throw new TypeError('parameter 1 is not of type "Element".');
                        }
                        var observations = this.observations_;
                        if (observations.has(target)) {
                            return;
                        }
                        observations.set(target, new ResizeObservation(target));
                        this.controller_.addObserver(this);
                        this.controller_.refresh();
                    };
                    ResizeObserverSPI.prototype.unobserve = function(target) {
                        if (!arguments.length) {
                            throw new TypeError('1 argument required, but only 0 present.');
                        }
                        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
                            return;
                        }
                        if (!(target instanceof getWindowOf(target).Element)) {
                            throw new TypeError('parameter 1 is not of type "Element".');
                        }
                        var observations = this.observations_;
                        if (!observations.has(target)) {
                            return;
                        }
                        observations.delete(target);
                        if (!observations.size) {
                            this.controller_.removeObserver(this);
                        }
                    };
                    ResizeObserverSPI.prototype.disconnect = function() {
                        this.clearActive();
                        this.observations_.clear();
                        this.controller_.removeObserver(this);
                    };
                    ResizeObserverSPI.prototype.gatherActive = function() {
                        var _this = this;
                        this.clearActive();
                        this.observations_.forEach(function(observation) {
                            if (observation.isActive()) {
                                _this.activeObservations_.push(observation);
                            }
                        });
                    };
                    ResizeObserverSPI.prototype.broadcastActive = function() {
                        if (!this.hasActive()) {
                            return;
                        }
                        var ctx = this.callbackCtx_;
                        var entries = this.activeObservations_.map(function(observation) {
                            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
                        });
                        this.callback_.call(ctx, entries, ctx);
                        this.clearActive();
                    };
                    ResizeObserverSPI.prototype.clearActive = function() {
                        this.activeObservations_.splice(0);
                    };
                    ResizeObserverSPI.prototype.hasActive = function() {
                        return this.activeObservations_.length > 0;
                    };
                    return ResizeObserverSPI;
                }());
                var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
                var ResizeObserver = (function() {
                    function ResizeObserver(callback) {
                        if (!(this instanceof ResizeObserver)) {
                            throw new TypeError('Cannot call a class as a function.');
                        }
                        if (!arguments.length) {
                            throw new TypeError('1 argument required, but only 0 present.');
                        }
                        var controller = ResizeObserverController.getInstance();
                        var observer = new ResizeObserverSPI(callback, controller, this);
                        observers.set(this, observer);
                    }
                    return ResizeObserver;
                }());
                ['observe', 'unobserve', 'disconnect'].forEach(function(method) {
                    ResizeObserver.prototype[method] = function() {
                        var _a;
                        return (_a = observers.get(this))[method].apply(_a, arguments);
                    };
                });
                var index = (function() {
                    if (typeof global$1.ResizeObserver !== 'undefined') {
                        return global$1.ResizeObserver;
                    }
                    return ResizeObserver;
                })();
                __webpack_exports__["default"] = (index);
            }.call(this, __webpack_require__(3)))
        }),
        1439: (function(module, exports, __webpack_require__) {
            var camel2hyphen = __webpack_require__(1440);
            var isDimension = function(feature) {
                var re = /[height|width]$/;
                return re.test(feature);
            };
            var obj2mq = function(obj) {
                var mq = '';
                var features = Object.keys(obj);
                features.forEach(function(feature, index) {
                    var value = obj[feature];
                    feature = camel2hyphen(feature);
                    if (isDimension(feature) && typeof value === 'number') {
                        value = value + 'px';
                    }
                    if (value === true) {
                        mq += feature;
                    } else if (value === false) {
                        mq += 'not ' + feature;
                    } else {
                        mq += '(' + feature + ': ' + value + ')';
                    }
                    if (index < features.length - 1) {
                        mq += ' and '
                    }
                });
                return mq;
            };
            var json2mq = function(query) {
                var mq = '';
                if (typeof query === 'string') {
                    return query;
                }
                if (query instanceof Array) {
                    query.forEach(function(q, index) {
                        mq += obj2mq(q);
                        if (index < query.length - 1) {
                            mq += ', '
                        }
                    });
                    return mq;
                }
                return obj2mq(query);
            };
            module.exports = json2mq;
        }),
        1440: (function(module, exports) {
            var camel2hyphen = function(str) {
                return str.replace(/[A-Z]/g, function(match) {
                    return '-' + match.toLowerCase();
                }).toLowerCase();
            };
            module.exports = camel2hyphen;
        }),
        1441: (function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var _react = __webpack_require__(352);
            var _react2 = _interopRequireDefault(_react);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            var defaultProps = {
                accessibility: true,
                adaptiveHeight: false,
                afterChange: null,
                appendDots: function appendDots(dots) {
                    return _react2.default.createElement("ul", {
                        style: {
                            display: "block"
                        }
                    }, dots);
                },
                arrows: true,
                autoplay: false,
                autoplaySpeed: 3000,
                beforeChange: null,
                centerMode: false,
                centerPadding: "50px",
                className: "",
                cssEase: "ease",
                customPaging: function customPaging(i) {
                    return _react2.default.createElement("button", null, i + 1);
                },
                dots: false,
                dotsClass: "slick-dots",
                draggable: true,
                easing: "linear",
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: null,
                nextArrow: null,
                onEdge: null,
                onInit: null,
                onLazyLoadError: null,
                onReInit: null,
                pauseOnDotsHover: false,
                pauseOnFocus: false,
                pauseOnHover: true,
                prevArrow: null,
                responsive: null,
                rows: 1,
                rtl: false,
                slide: "div",
                slidesPerRow: 1,
                slidesToScroll: 1,
                slidesToShow: 1,
                speed: 500,
                swipe: true,
                swipeEvent: null,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                waitForAnimate: true
            };
            exports.default = defaultProps;
        }),
        1442: (function(module, exports, __webpack_require__) {
            var MediaQueryDispatch = __webpack_require__(1443);
            module.exports = new MediaQueryDispatch();
        }),
        1443: (function(module, exports, __webpack_require__) {
            var MediaQuery = __webpack_require__(1444);
            var Util = __webpack_require__(1446);
            var each = Util.each;
            var isFunction = Util.isFunction;
            var isArray = Util.isArray;

            function MediaQueryDispatch() {
                if (!window.matchMedia) {
                    throw new Error('matchMedia not present, legacy browsers require a polyfill');
                }
                this.queries = {};
                this.browserIsIncapable = !window.matchMedia('only all').matches;
            }
            MediaQueryDispatch.prototype = {
                constructor: MediaQueryDispatch,
                register: function(q, options, shouldDegrade) {
                    var queries = this.queries,
                        isUnconditional = shouldDegrade && this.browserIsIncapable;
                    if (!queries[q]) {
                        queries[q] = new MediaQuery(q, isUnconditional);
                    }
                    if (isFunction(options)) {
                        options = {
                            match: options
                        };
                    }
                    if (!isArray(options)) {
                        options = [options];
                    }
                    each(options, function(handler) {
                        if (isFunction(handler)) {
                            handler = {
                                match: handler
                            };
                        }
                        queries[q].addHandler(handler);
                    });
                    return this;
                },
                unregister: function(q, handler) {
                    var query = this.queries[q];
                    if (query) {
                        if (handler) {
                            query.removeHandler(handler);
                        } else {
                            query.clear();
                            delete this.queries[q];
                        }
                    }
                    return this;
                }
            };
            module.exports = MediaQueryDispatch;
        }),
        1444: (function(module, exports, __webpack_require__) {
            var QueryHandler = __webpack_require__(1445);
            var each = __webpack_require__(1446).each;

            function MediaQuery(query, isUnconditional) {
                this.query = query;
                this.isUnconditional = isUnconditional;
                this.handlers = [];
                this.mql = window.matchMedia(query);
                var self = this;
                this.listener = function(mql) {
                    self.mql = mql.currentTarget || mql;
                    self.assess();
                };
                this.mql.addListener(this.listener);
            }
            MediaQuery.prototype = {
                constuctor: MediaQuery,
                addHandler: function(handler) {
                    var qh = new QueryHandler(handler);
                    this.handlers.push(qh);
                    this.matches() && qh.on();
                },
                removeHandler: function(handler) {
                    var handlers = this.handlers;
                    each(handlers, function(h, i) {
                        if (h.equals(handler)) {
                            h.destroy();
                            return !handlers.splice(i, 1);
                        }
                    });
                },
                matches: function() {
                    return this.mql.matches || this.isUnconditional;
                },
                clear: function() {
                    each(this.handlers, function(handler) {
                        handler.destroy();
                    });
                    this.mql.removeListener(this.listener);
                    this.handlers.length = 0;
                },
                assess: function() {
                    var action = this.matches() ? 'on' : 'off';
                    each(this.handlers, function(handler) {
                        handler[action]();
                    });
                }
            };
            module.exports = MediaQuery;
        }),
        1445: (function(module, exports) {
            function QueryHandler(options) {
                this.options = options;
                !options.deferSetup && this.setup();
            }
            QueryHandler.prototype = {
                constructor: QueryHandler,
                setup: function() {
                    if (this.options.setup) {
                        this.options.setup();
                    }
                    this.initialised = true;
                },
                on: function() {
                    !this.initialised && this.setup();
                    this.options.match && this.options.match();
                },
                off: function() {
                    this.options.unmatch && this.options.unmatch();
                },
                destroy: function() {
                    this.options.destroy ? this.options.destroy() : this.off();
                },
                equals: function(target) {
                    return this.options === target || this.options.match === target;
                }
            };
            module.exports = QueryHandler;
        }),
        1446: (function(module, exports) {
            function each(collection, fn) {
                var i = 0,
                    length = collection.length,
                    cont;
                for (i; i < length; i++) {
                    cont = fn(collection[i], i);
                    if (cont === false) {
                        break;
                    }
                }
            }

            function isArray(target) {
                return Object.prototype.toString.apply(target) === '[object Array]';
            }

            function isFunction(target) {
                return typeof target === 'function';
            }
            module.exports = {
                isFunction: isFunction,
                isArray: isArray,
                each: each
            };
        })
    }
]);