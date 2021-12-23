/**
   * @license
   * author: aishu
   * i18nfactory v1.0.0
   * Released under the Apache-2.0 license.
   */
export default function(n){var r=n.translations,t=n.locale,u=void 0===t?r[0]:t,o=function(n){void 0===n&&(n=[]);return function(t,o){var e=function(t){var o=function(n){var r={};return n.forEach((function(n){r[n[0]]=n})),r}(n)[t]||[];return o[r.indexOf(u)]||o[0]||""}(t);return o?e.replace(/\${(.+?)}/g,(function(n,r){return n&&r&&o[r]||""})):e}};return o.setup=function(n){var r=n.locale;u=r},o}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5lcy5qcyIsInNvdXJjZXMiOlsiLi4vZGlzdC10cmFuc3BpbGVkL2kxOG5GYWN0b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBpMThu5bel5Y6C5Ye95pWwXHJcbiAqIEBwYXJhbSBvcHRpb25zLnRyYW5zbGF0aW9ucyDmlK/mjIHnmoTor63oqIBcclxuICogQHBhcmFtIG9wdGlvbnMubG9jYWxlIOW9k+WJjeivreiogFxyXG4gKi9cclxudmFyIGkxOG5GYWN0b3J5ID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgdHJhbnNsYXRpb25zID0gX2EudHJhbnNsYXRpb25zLCBfYiA9IF9hLmxvY2FsZSwgbG9jYWxlID0gX2IgPT09IHZvaWQgMCA/IHRyYW5zbGF0aW9uc1swXSA6IF9iO1xyXG4gICAgdmFyIHVzZUxvY2FsZSA9IGxvY2FsZTtcclxuICAgIHZhciBpMThuID0gZnVuY3Rpb24gKHJlc291cmNlcykge1xyXG4gICAgICAgIGlmIChyZXNvdXJjZXMgPT09IHZvaWQgMCkgeyByZXNvdXJjZXMgPSBbXTsgfVxyXG4gICAgICAgIHZhciBLZXlJbmRleCA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5bCG5Zu96ZmF5YyW6LWE5rqQ6L2s5o2i5Li65a2X5YW4XHJcbiAgICAgICAgICogQHBhcmFtIHJlc291cmNlcyDlm73pmYXljJbotYTmupBcclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgdHJhbnNTb3VyY2VzVG9EaWN0ID0gZnVuY3Rpb24gKHJlc291cmNlcykge1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzkvb/nlKjlr7nosaHmianlsZXmk43kvZzvvIznvJbor5Hnu5PmnpzkvJrosIPnlKh0c2xpYi5fX2Fzc2lnbu+8jOaXtumXtOWkjeadguW6puWkqumrmOW9seWTjeaAp+iDveOAglxyXG4gICAgICAgICAgICAvLyDlm6DmraTkvb/nlKjlsZ7mgKfotYvlgLznmoTmlrnlvI9cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgICAgICAgICByZXNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAocmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtyZXNvdXJjZVtLZXlJbmRleF1dID0gcmVzb3VyY2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Zyo6LWE5rqQ5Lit5p+l5om+5Yy56YWN6aG5XHJcbiAgICAgICAgICogQHBhcmFtcyBrZXkg5p+l5om+5YWz6ZSu5a2XXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIGZpbmRNYXRjaCA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHNvdXJjZURpY3QgPSB0cmFuc1NvdXJjZXNUb0RpY3QocmVzb3VyY2VzKTtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gc291cmNlRGljdFtrZXldIHx8IFtdOyAvLyDkuablhpnor63oqIDkuIvmoIdcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG1hdGNoW3RyYW5zbGF0aW9ucy5pbmRleE9mKHVzZUxvY2FsZSldO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0IHx8IChtYXRjaFtLZXlJbmRleF0gfHwgJycpOyAvLyDov5Tlm57ljLnphY3pobnmiJZDb25maWcua2V55a+55bqU55qE6K+t6KiAXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGtleSwgcmVwbGFjZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGZpbmRNYXRjaChrZXkpO1xyXG4gICAgICAgICAgICBpZiAocmVwbGFjZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2gucmVwbGFjZSgvXFwkeyguKz8pfS9nLCBmdW5jdGlvbiAobWF0Y2gsIGNhcHR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoIHx8ICFjYXB0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VtZW50c1tjYXB0dXJlXSB8fCAnJztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBpMThuLnNldHVwID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsZSA9IF9hLmxvY2FsZTtcclxuICAgICAgICB1c2VMb2NhbGUgPSBsb2NhbGU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGkxOG47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGkxOG5GYWN0b3J5O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pMThuRmFjdG9yeS5qcy5tYXAiXSwibmFtZXMiOlsiX2EiLCJ0cmFuc2xhdGlvbnMiLCJfYiIsImxvY2FsZSIsInVzZUxvY2FsZSIsImkxOG4iLCJyZXNvdXJjZXMiLCJrZXkiLCJyZXBsYWNlbWVudHMiLCJtYXRjaCIsInJlc3VsdCIsImZvckVhY2giLCJyZXNvdXJjZSIsInRyYW5zU291cmNlc1RvRGljdCIsImluZGV4T2YiLCJmaW5kTWF0Y2giLCJyZXBsYWNlIiwiY2FwdHVyZSIsInNldHVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7ZUE4Q29CLFNBQUNBLE9BQUVDLEVBQVlELEVBQUFDLGFBQUVDLEVBQUFGLEVBQUFHLE9BRTdCQyxPQUZtQyxJQUFBRixFQUFHRCxFQUFhLEdBQUVDLEVBSW5ERyxFQUFhLFNBQUNDLFFBQUEsSUFBQUEsSUFBQUEsRUFBQSxXQStCVCxTQUFDQyxFQUFhQyxPQUNYQyxFQVRRLFNBQUNGLE9BRVRFLEVBbEJpQixTQUFDSCxPQUdsQkksRUFBYyxVQUVwQkosRUFBVUssU0FBUSxTQUFDQyxHQUNmRixFQUFPRSxFQVpFLElBWW9CQSxLQUcxQkYsRUFRWUcsQ0FBbUJQLEdBQ2JDLElBQVEsVUFDbEJFLEVBQU1SLEVBQWFhLFFBQVFWLEtBRXhCSyxFQTNCTCxJQTJCd0IsR0FJdkJNLENBQVVSLFVBRXBCQyxFQUNPQyxFQUFNTyxRQUFRLGNBQWMsU0FBQ1AsRUFBT1EsVUFDbENSLEdBQVVRLEdBSVJULEVBQWFTLElBSFQsTUFNUlIsV0FLbkJKLEVBQUthLE1BQVEsU0FBQ2xCLE9BQUVHLEVBQU1ILEVBQUFHLE9BQ2xCQyxFQUFZRCxHQUdURSJ9