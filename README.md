# Scroll-View

<h2>Options:</h2>
<p>start: 'default'<br>
  // should be 'default', selector(string) or px(number)</p>
<p>end: null<br>
  // could be null(until the bottom of whole page), selector(string, with endKey of direct element) or px(number, direct position of page)<br>
  // only avaliable with repeat is true</p>
<p>endKey: 'bottom'<br>
  // could be 'top', 'bottom'(top/bottom of direct end element) or float number(the position of end element's percentage height, great-equal than 0 and less-equal than 1)<br>
  // only avaliable with end type is selector(string)</p>
<p>threshold: -200<br>
  // should be px(number), -200 means that start position get 200px over to the end of window</p>
<p>addClass: 'scroll-view'<br>
  // should be string, add the class name to target element</p>
<p>repeat: false<br>
  // should be boolean</p>
