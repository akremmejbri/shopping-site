(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    [444], {
        3829: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "FREE_PLANS", function() {
                return FREE_PLANS;
            });
            __webpack_require__.d(__webpack_exports__, "SHOW_BAC_TERMS", function() {
                return SHOW_BAC_TERMS;
            });
            __webpack_require__.d(__webpack_exports__, "EMOJIS", function() {
                return EMOJIS;
            });
            __webpack_require__.d(__webpack_exports__, "LABEL_VALUE_EMOJIS", function() {
                return LABEL_VALUE_EMOJIS;
            });
            __webpack_require__.d(__webpack_exports__, "multiplySize", function() {
                return multiplySize;
            });
            __webpack_require__.d(__webpack_exports__, "INTERVAL_UNIT_MS", function() {
                return INTERVAL_UNIT_MS;
            });
            __webpack_require__.d(__webpack_exports__, "MOBILE_SCREEN_COEFFICIENT", function() {
                return MOBILE_SCREEN_COEFFICIENT;
            });
            __webpack_require__.d(__webpack_exports__, "BannerTitle", function() {
                return BannerTitle;
            });
            __webpack_require__.d(__webpack_exports__, "BannerSubtitle", function() {
                return BannerSubtitle;
            });
            __webpack_require__.d(__webpack_exports__, "ButtonLayout", function() {
                return ButtonLayout;
            });
            __webpack_require__.d(__webpack_exports__, "ButtonLink", function() {
                return ButtonLink;
            });
            __webpack_require__.d(__webpack_exports__, "TIMER_GOAL_BEHAVIOR", function() {
                return TIMER_GOAL_BEHAVIOR;
            });
            __webpack_require__.d(__webpack_exports__, "TIME_PERIODS", function() {
                return TIME_PERIODS;
            });
            __webpack_require__.d(__webpack_exports__, "handleColorChangeComplete", function() {
                return handleColorChangeComplete;
            });
            var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3743);
            var _lib_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(812);

            function _templateObject() {
                var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", " !important;\n  font-family: ", " !important;\n  font-size: ", " !important;\n  font-style: ", " !important;\n  font-weight: ", " !important;\n  padding: ", " !important;\n  border-radius: ", " !important;\n  border: none;\n  display: inline-block;\n  &:link {\n    color: ", " !important;\n  }\n"]);
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
            var FREE_PLANS = ['free', 'v_250'];
            var SHOW_BAC_TERMS = ['display_message', 'empty_cart_display_message', 'empty_cart_hide_counter', 'hide_counter'];
            var EMOJIS = {
                emoji_empty: '',
                emoji_not_sign: '🚫',
                emoji_fire: '🔥',
                emoji_santa: '🎅',
                emoji_point_right: '👉',
                emoji_good: '👍',
                emoji_rocket: '🚀',
                emoji_heart: '❤️',
                emoji_smile: '😀',
                emoji_time: '⏰',
                emoji_party_popper: '🎉'
            };
            var LABEL_VALUE_EMOJIS = Object.keys(EMOJIS).map(function(emojis_key) {
                return {
                    emoji: EMOJIS[emojis_key],
                    value: emojis_key
                };
            });
            var multiplySize = function multiplySize(sizeInPX, quantity) {
                return parseInt(sizeInPX) * quantity + 'px';
            };
            var INTERVAL_UNIT_MS = {
                ms: 1,
                s: 1000,
                m: 60 * 1000,
                h: 3600 * 1000,
                d: 24 * 3600 * 1000
            };
            var MOBILE_SCREEN_COEFFICIENT = 0.4;
            var BannerTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(function(props) {
                return {
                    color: props.theme.banner_beforeTitleFontColor,
                    fontFamily: props.theme.banner_beforeTitleFontFamily,
                    fontSize: props.theme.appViewWidth > 428 ? props.theme.banner_beforeTitleFontSize : multiplySize(props.theme.banner_beforeTitleFontSize, MOBILE_SCREEN_COEFFICIENT),
                    fontStyle: props.theme.banner_beforeTitleFontStyle,
                    fontWeight: props.theme.banner_beforeTitleFontStyle,
                    marginBottom: props.theme.banner_beforeTitleSpacing,
                    lineHeight: 1
                };
            });
            var BannerSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(function(props) {
                return {
                    color: props.theme.banner_beforeSubtitleFontColor,
                    fontFamily: props.theme.banner_beforeSubtitleFontFamily,
                    fontSize: props.theme.appViewWidth > 428 ? props.theme.banner_beforeSubtitleFontSize : multiplySize(props.theme.banner_beforeSubtitleFontSize, MOBILE_SCREEN_COEFFICIENT),
                    fontStyle: props.theme.banner_beforeSubtitleFontStyle,
                    fontWeight: props.theme.banner_beforeSubtitleFontStyle,
                    marginBottom: props.theme.banner_beforeSubtitleSpacing,
                    lineHeight: 1
                };
            });
            var ButtonLayout = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div({
                textAlign: 'center',
                margin: '15px 0'
            });
            var ButtonLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a(_templateObject(), function(props) {
                return props.theme.buttonColor;
            }, function(props) {
                return props.theme.buttonFontColor;
            }, function(props) {
                return props.theme.buttonFontFamily;
            }, function(props) {
                return props.theme.buttonFontSize;
            }, function(props) {
                return props.theme.buttonFontStyle;
            }, function(props) {
                return props.theme.buttonFontStyle;
            }, function(props) {
                return "".concat(props.theme.buttonSize, " ").concat(multiplySize(props.theme.buttonSize, 2));
            }, function(props) {
                return props.theme.borderRadius;
            }, function(props) {
                return props.theme.buttonFontColor;
            });
            var TIMER_GOAL_BEHAVIOR = {
                countdownDate: {
                    type: 'date',
                    countDirection: 'down',
                    propsChanges: function propsChanges() {
                        return {
                            showYears: true,
                            showDays: true,
                            showHours: true,
                            showMinutes: true,
                            showSeconds: true,
                            activeDates: 'choosePeriod'
                        };
                    },
                    rangeSelector: 'choose-period',
                    fixedHeader: {
                        fixedHeader_textBeforeCount: 'Get 30% off. Sale ends in:',
                        fixedHeader_textBeforeCountEmoji: 'emoji_fire'
                    },
                    banner: {
                        banner_beforeTitle: 'WEBSITE COMING SOON!',
                        banner_beforeTitleFontColor: 'rgba(66,66,66,1)',
                        banner_counterBackgroundColor: '#ff4632',
                        banner_beforeTitleFontFamily: 'Nunito',
                        banner_beforeTitleFontSize: '36px',
                        banner_beforeTitleFontStyle: 'bold',
                        banner_beforeTitleSpacing: '10px',
                        banner_borderColor: 'rgba(248, 246, 246)',
                        banner_counterBorderSize: '0px',
                        counterFigure: 'square',
                        banner_counterFontColor: 'white',
                        counterStyle: 'separate'
                    }
                },
                countdownTime: {
                    type: 'date',
                    countDirection: 'down',
                    propsChanges: function propsChanges() {
                        return {
                            showYears: false,
                            showDays: false,
                            showHours: true,
                            showMinutes: true,
                            showSeconds: true,
                            activeDates: 'choosePeriod',
                            scheduleDates: {
                                start: moment().valueOf(),
                                end: moment().add(20, 'hour').valueOf()
                            }
                        };
                    },
                    rangeSelector: 'choose-period',
                    fixedHeader: {
                        fixedHeader_textBeforeCount: 'Event starts in:',
                        fixedHeader_textBeforeCountEmoji: 'emoji_rocket'
                    },
                    banner: {
                        banner_beforeTitle: 'WEBSITE COMING SOON!',
                        banner_beforeTitleFontColor: 'rgba(66,66,66,1)',
                        banner_counterBackgroundColor: 'white',
                        banner_beforeTitleFontFamily: 'Nunito',
                        banner_beforeTitleFontSize: '36px',
                        banner_beforeTitleFontStyle: 'bold',
                        banner_borderColor: 'rgba(248, 246, 246)',
                        banner_counterBorderSize: '0px',
                        banner_counterFontColor: '#ff4632',
                        counterFigure: 'no_borders'
                    }
                },
                countdownTimeVisitor: {
                    type: 'date',
                    countDirection: 'down',
                    useCookie: true,
                    rangeSelector: 'always-active|choose-period|time-interval-per-visitor',
                    propsChanges: function propsChanges() {
                        return {
                            showYears: false,
                            showDays: false
                        };
                    },
                    fixedHeader: {
                        fixedHeader_textBeforeCount: 'Limited Time Offer!',
                        fixedHeader_textBeforeCountEmoji: 'emoji_fire'
                    },
                    banner: {
                        banner_beforeSubtitle: '',
                        banner_beforeTitle: 'Get 30% off. Sale ends in:',
                        banner_counterBackgroundColor: '#ff4632',
                        banner_beforeTitleFontColor: 'rgba(66,66,66,1)',
                        banner_beforeTitleFontFamily: 'Nunito',
                        banner_beforeTitleFontSize: '36px',
                        banner_beforeTitleFontStyle: 'bold',
                        banner_beforeTitleSpacing: '10px',
                        banner_borderColor: 'rgba(248, 246, 246)',
                        banner_borderRadius: '0px',
                        banner_counterBorderSize: '0px',
                        counterFigure: 'square',
                        banner_counterFontColor: 'white',
                        counterStyle: 'separate'
                    }
                },
                countdownNumberVisitor: {
                    type: 'number',
                    countDirection: 'down',
                    useCookie: true,
                    rangeSelector: 'always-active|choose-period|starting-number|time-frequency',
                    fixedHeader: {
                        fixedHeader_textBeforeCount: 'Only a Few Left!',
                        fixedHeader_textBeforeCountEmoji: 'emoji_time'
                    },
                    banner: {
                        banner_beforeSubtitle: '',
                        banner_beforeTitle: 'Only a Few Left!',
                        banner_beforeTitleFontColor: 'rgba(66,66,66,1)',
                        banner_beforeTitleFontFamily: 'Nunito',
                        banner_beforeTitleFontSize: '36px',
                        banner_beforeTitleFontStyle: 'bold',
                        banner_beforeTitleSpacing: '10px',
                        banner_borderColor: 'rgba(248, 246, 246)',
                        banner_borderRadius: '0px',
                        banner_counterBorderSize: '0px',
                        counterFigure: 'square',
                        banner_counterFontColor: 'white',
                        counterStyle: 'separate',
                        banner_counterBackgroundColor: '#ff4632'
                    }
                },
                countupNumber: {
                    type: 'number',
                    countDirection: 'up',
                    rangeSelector: 'always-active|choose-period|starting-number|time-frequency',
                    fixedHeader: {
                        fixedHeader_textBeforeCount: 'Used by Hundreds!',
                        fixedHeader_textBeforeCountEmoji: 'emoji_heart'
                    },
                    banner: {
                        banner_beforeSubtitle: '',
                        banner_beforeTitle: 'Used by Hundreds!',
                        banner_beforeTitleFontColor: 'rgba(66,66,66,1)',
                        banner_beforeTitleFontFamily: 'Nunito',
                        banner_beforeTitleFontSize: '36px',
                        banner_beforeTitleFontStyle: 'bold',
                        banner_beforeTitleSpacing: '10px',
                        banner_borderColor: 'rgba(248, 246, 246)',
                        banner_borderRadius: '0px',
                        banner_counterBorderSize: '0px',
                        counterFigure: 'square',
                        banner_counterFontColor: 'white',
                        counterStyle: 'separate',
                        banner_counterBackgroundColor: '#ff4632'
                    }
                },
                countupNumberVisitor: {
                    type: 'number',
                    countDirection: 'up',
                    useCookie: true,
                    rangeSelector: 'always-active|choose-period|starting-number|time-frequency',
                    fixedHeader: {
                        fixedHeader_textBeforeCount: 'Sold in the Last Hour!',
                        fixedHeader_textBeforeCountEmoji: 'emoji_party_popper'
                    },
                    banner: {
                        banner_beforeSubtitle: '',
                        banner_beforeTitle: 'Sold in the Last Hour!',
                        banner_beforeTitleFontColor: 'rgba(66,66,66,1)',
                        banner_beforeTitleFontFamily: 'Nunito',
                        banner_beforeTitleFontSize: '36px',
                        banner_beforeTitleFontStyle: 'bold',
                        banner_beforeTitleSpacing: '10px',
                        banner_borderColor: 'rgba(248, 246, 246)',
                        banner_borderRadius: '0px',
                        banner_counterBorderSize: '0px',
                        counterFigure: 'square',
                        banner_counterFontColor: 'white',
                        counterStyle: 'separate',
                        banner_counterBackgroundColor: '#ff4632'
                    }
                },
                countupDate: {
                    type: 'date',
                    countDirection: 'up',
                    rangeSelector: 'always-active|choose-period|start-date',
                    propsChanges: function propsChanges() {
                        return {
                            startDate: Date.now() - 10000000,
                            showDays: true,
                            showHours: true,
                            showMinutes: true,
                            showSeconds: true
                        };
                    },
                    fixedHeader: {
                        fixedHeader_textBeforeCount: 'Days Since Last Incident',
                        fixedHeader_textBeforeCountEmoji: 'emoji_party_popper'
                    },
                    banner: {
                        banner_beforeSubtitle: '',
                        counterFigure: 'cycle',
                        banner_beforeTitle: 'Days Since Last Incident',
                        counterStyle: 'joined',
                        banner_counterBorderColor: 'rgba(255,70,50,0.48)',
                        banner_counterBorderSize: '5px',
                        banner_beforeTitleFontColor: '#424242',
                        banner_counterFontColor: '#ff4632',
                        banner_counterBackgroundColor: 'white',
                        banner_beforeTitleSpacing: '10px'
                    }
                }
            };
            var TIME_PERIODS = ['Days', 'Hours', 'Minutes', 'Seconds'];
            var handleColorChangeComplete = function handleColorChangeComplete(namespace, value, observableStore) {
                observableStore.updateValue({
                    key: "model.".concat(namespace),
                    value: Object(_lib_color__WEBPACK_IMPORTED_MODULE_1__["makeColorString"])(value),
                    renderViewStyleOnly: false
                });
            };
        })
    }
]);