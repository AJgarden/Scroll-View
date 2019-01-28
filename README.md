# Scroll-View
Must include jQuery library 1.9+ front of this script.

<h2>How to use:</h2>
<p>Include below javascript files:</p>
<ul>
  <li>jQuery library 1.9+</li>
  <li>jquery.scrollView.js</li>
</ul>
<p>Edit html code as</p>
<pre>&lt;div id="target"&gt;&lt;/div&gt;</pre>
<p>Then call scroll-view function in script</p>
<pre>
&lt;script&gt;<br>
$("#target").scrollView();<br>
&lt;/script&gt;
</pre>

<h2>Options(and default value):</h2>
<p>By passing below parameters as object in function to set target like as</p>
<pre>
&lt;script&gt;<br>
$("#target").scrollView({<br>
&nbsp;&nbsp;&nbsp;&nbsp;start: 'default',<br>
&nbsp;&nbsp;&nbsp;&nbsp;threshold: -200,<br>
&nbsp;&nbsp;&nbsp;&nbsp;repeat: true<br>
});<br>
&lt;/script&gt;
</pre>
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Value</th>
      <th>Default</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>start</th>
      <td>string or number</td>
      <td>'default'</td>
      <td>
        Start at key element's position top or direct number.<br>
        Should be 'default'(at element itself), 'selector'(string), or px(number).
      </td>
    </tr>
    <tr>
      <th>end</th>
      <td>string or number</td>
      <td>null</td>
      <td>
        End at key element's position or direct number.<br>
        Only available if <b>repeat</b> is true.<br>
        Should be null(until the bottom of whole page), 'selector'(string, with endKey of direct element), or px(number, direct position of page).
      </td>
    </tr>
    <tr>
      <th>endKey</th>
      <td>string or number</td>
      <td>'bottom'</td>
      <td>
        Choose the position at key element's top or bottom.<br>
        Only available if type of <b>end</b> is selector(string).<br>
        Should be 'top', 'bottom'(top/bottom of direct end element) or float number(the position of end element's percentage height, greater-eqaul than 0 and lesser-eual than 1).
      </td>
    </tr>
    <tr>
      <th>threshold</th>
      <td>number</td>
      <td>-200</td>
      <td>
        Should be px(number), -200 means that start position get 200px over to the end of window.
      </td>
    </tr>
    <tr>
      <th>addClass</th>
      <td>string</td>
      <td>'scroll-view'</td>
      <td>
        Should be string, add the class name to target element.
      </td>
    </tr>
    <tr>
      <th>repeat</th>
      <td>boolean</td>
      <td>false</td>
      <td>
        Should be boolean.
      </td>
    </tr>
  </tbody>
</table>

<h2>Callbacks:</h2>
<p>You can call function by listening below events like as</p>
<pre>
$("#target").scrollView({<br>
&nbsp;&nbsp;&nbsp;&nbsp;onAddClass: function(element) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("target is added class.");<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
});
</pre>
<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Return</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>onInit</th>
      <td>element</td>
      <td>
        Callback when element is initialized.
      </td>
    </tr>
    <tr>
      <th>onChange</th>
      <td>element</td>
      <td>
        Callback when element changes it's status everytime.
      </td>
    </tr>
    <tr>
      <th>onAddClass</th>
      <td>element</td>
      <td>
        Callback after element adding class everytime.
      </td>
    </tr>
    <tr>
      <th>onRemoveClass</th>
      <td>element</td>
      <td>
        Callback after element removeing class everytime.
      </td>
    </tr>
  </tbody>
</table>

<h2>Destroy:</h2>
<p>If you want to stop scrollView on direct element, just call</p>
<pre>
$("#target").scrollView("destroy");
</pre>
