var reg, reg1, reg2, reg3, reg4, reg5, reg6, reg7, reg8, val, finale, finale2, finale3, divHeight, lineHeight, linee, numeri, text, x, filename, event, msie, mimeType, langnum, linguaggio;
var langnum = 0;
var e=0;
    //select languages;

function select(a){
langnum = a;
    //console.log("Linguaggio php = " + langnum);
}
    // detect browser
function qualeb(){
    msie="";
    if (navigator.userAgent.indexOf('MSIE') != -1){
    var detectIEregexp = /MSIE (\d+\.\d+);/
    }else{ 
    var detectIEregexp = /Trident.*rv[ :]*(\d+\.\d+)/ 
    }
    
    if (detectIEregexp.test(navigator.userAgent)){ 
    var ieversion=new Number(RegExp.$1)
    if (ieversion>=12){msie = "MSIE";}
    else if (ieversion>=11){msie = "MSIE";}
    else if (ieversion>=10){msie = "MSIE";}
    else if (ieversion>=9){msie = "MSIE";}
    else if (ieversion>=8){msie = "MSIE";}
    else if (ieversion>=7){msie = "MSIE";}
    else if (ieversion>=6){msie = "MSIE";}
    else if (ieversion>=5){msie = "MSIE";}
    else{msie = "raquel";}
}
}    

// drawing the output

function colori() {	
   
    //Add css on editablecontent
    
    var regexlangfirst=[
      /*Javascript*/    /\b(?:abstract|arguments|boolean|break|byte|case|catch|char|const|class|continue|debugger|default|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield|alert|all|anchor|anchors|area|assign|blur|button|checkbox|clearInterval|clearTimeout|clientInformation|close|closed|confirm|constructor|crypto|decodeURI|decodeURIComponent|defaultStatus|document|element|elements|embed|embeds|encodeURI|encodeURIComponent|escape|event|fileUpload|focus|form|forms|frame|innerHeight|innerWidth|layer|layers|link|location|mimeTypes|navigate|navigator|frames|frameRate|hidden|history|image|images|offscreenBuffering|open|opener|option|outerHeight|outerWidth|packages|pageXOffset|pageYOffset|parent|parseFloat|parseInt|password|pkcs11|plugin|prompt|propertyIsEnum|radio|reset|screenX|screenY|scroll|secure|select|self|setInterval|setTimeout|status|submit|taint|text|textarea|top|unescape|untaint|window|onblur|onclick|onerror|onfocus|onkeydown|onkeypress|onkeyup|onmouseover|onload|onmouseup|onmousedown|onsubmit)\b(?=(?:[^"]*"[^"]*")*[^"]*$)(?=(?:[^']*'[^']*')*[^']*$)(?![^<]*>)(?![^\/*]*\*\/)$/g,
 /*PHP*/                 /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__CLASS__|__DIR__|__FILE__|__FUNCTION__|__LINE__|__METHOD__|__NAMESPACE__|__TRAIT__PHP_VERSION|PHP_OS|PHP_SAPI|php_sapi_name|PHP_EOL|PHP_INT_MAX|PHP_INT_SIZE|DEFAULT_INCLUDE_PATH|PEAR_INSTALL_DIR|PEAR_EXTENSION_DIR|PHP_EXTENSION_DIR|PHP_PREFIX|PHP_BINDIR|PHP_LIBDIR|PHP_DATADIR|PHP_SYSCONFDIR|PHP_LOCALSTATEDIR|PHP_CONFIG_FILE_PATH|PHP_CONFIG_FILE_SCAN_DIR|PHP_SHLIB_SUFFIX|PHP_OUTPUT_HANDLER_START|PHP_OUTPUT_HANDLER_CONT|PHP_OUTPUT_HANDLER_END|E_ERROR|E_WARNING|E_PARSE|E_NOTICE|E_CORE_ERROR|E_CORE_WARNING|E_COMPILE_ERROR|E_COMPILE_WARNING|E_USER_ERROR|E_USER_WARNING|E_USER_NOTICE|E_ALL|E_STRICT|__COMPILER_HALT_OFFSET__)\b(?=(?:[^"]*"[^"]*")*[^"]*$)(?=(?:[^']*'[^']*')*[^']*$)(?![^<]*>)(?![^\/*]*\*\/)$/g,
 /*HTML*/ /(&lt;)*?(\b(&lt;|&gt;|!DOCTYPE|a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|big|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|datalist|dd|del|details|dfn|dialog|dir|ul|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|head|header|hr|html|i|iframe|img|input|ins|kbd|keygenlabel|legend|li|link|main|map|mark|menu|menuitem|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strike|s|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video|wbr)\b)+(?=(.*?&gt;|&gt;))(?![^<]*>)(?![^(&gt;){4}]*(&lt;){1})|(&lt;)*?((!DOCTYPE))+(?=(.*?&gt;|&gt;))(?![^<]*>)(?![^(&gt;){4}]*(&lt;){1})$/gm
    ];
   var regexlang=[
      /*Javascript*/    /\b(?:abstract|arguments|boolean|break|byte|case|catch|char|const|class|continue|debugger|default|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield|alert|all|anchor|anchors|area|assign|blur|button|checkbox|clearInterval|clearTimeout|clientInformation|close|closed|confirm|constructor|crypto|decodeURI|decodeURIComponent|defaultStatus|document|element|elements|embed|embeds|encodeURI|encodeURIComponent|escape|event|fileUpload|focus|form|forms|frame|innerHeight|innerWidth|layer|layers|link|location|mimeTypes|navigate|navigator|frames|frameRate|hidden|history|image|images|offscreenBuffering|open|opener|option|outerHeight|outerWidth|packages|pageXOffset|pageYOffset|parent|parseFloat|parseInt|password|pkcs11|plugin|prompt|propertyIsEnum|radio|reset|screenX|screenY|scroll|secure|select|self|setInterval|setTimeout|status|submit|taint|text|textarea|top|unescape|untaint|window|onblur|onclick|onerror|onfocus|onkeydown|onkeypress|onkeyup|onmouseover|onload|onmouseup|onmousedown|onsubmit)\b(?=(?:[^"]*"[^"]*")*[^"]*$)(?=(?:[^']*'[^']*')*[^']*$)(?![^<]*>)(?![^\/*]*\*\/)/gm,
 /*PHP*/                 /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__CLASS__|__DIR__|__FILE__|__FUNCTION__|__LINE__|__METHOD__|__NAMESPACE__|__TRAIT__PHP_VERSION|PHP_OS|PHP_SAPI|php_sapi_name|PHP_EOL|PHP_INT_MAX|PHP_INT_SIZE|DEFAULT_INCLUDE_PATH|PEAR_INSTALL_DIR|PEAR_EXTENSION_DIR|PHP_EXTENSION_DIR|PHP_PREFIX|PHP_BINDIR|PHP_LIBDIR|PHP_DATADIR|PHP_SYSCONFDIR|PHP_LOCALSTATEDIR|PHP_CONFIG_FILE_PATH|PHP_CONFIG_FILE_SCAN_DIR|PHP_SHLIB_SUFFIX|PHP_OUTPUT_HANDLER_START|PHP_OUTPUT_HANDLER_CONT|PHP_OUTPUT_HANDLER_END|E_ERROR|E_WARNING|E_PARSE|E_NOTICE|E_CORE_ERROR|E_CORE_WARNING|E_COMPILE_ERROR|E_COMPILE_WARNING|E_USER_ERROR|E_USER_WARNING|E_USER_NOTICE|E_ALL|E_STRICT|__COMPILER_HALT_OFFSET__)\b(?=(?:[^"]*"[^"]*")*[^"]*$)(?=(?:[^']*'[^']*')*[^']*$)(?![^<]*>)(?![^\/*]*\*\/)/gm,
   /*HTML*/ 
       /(&lt;)*?(\b(&lt;|&gt;|!DOCTYPE|a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|big|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|datalist|dd|del|details|dfn|dialog|dir|ul|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|head|header|hr|html|i|iframe|img|input|ins|kbd|keygenlabel|legend|li|link|main|map|mark|menu|menuitem|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strike|s|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video|wbr)\b)+(?=(.*?&gt;|&gt;))(?![^<]*>)(?![^(&gt;){4}]*(&lt;){1})|(&lt;)*?((!DOCTYPE))+(?=(.*?&gt;|&gt;))(?![^<]*>)(?![^(&gt;){4}]*(&lt;){1})/gm
   ];
regattribute =/(&lt;)*?(\b(hidden|high|href|hreflang|http-equiv|icon|id|ismap|itemprop|keytype|kind|label|lang|language|list|loop|low|manifest|max|maxlength|media|method|min|multiple|name|novalidate|open|optimum|pattern|ping|placeholder|poster|preload|pubdate|radiogroup|readonly|rel|required|reversed|rows|rowspan|sandbox|spellcheck|scope|scoped|seamless|selected|shape|size|sizes|span|src|srcdoc|srclang|srcset|start|step|style|summary|tabindex|target|type|usemap|value|width|wrap|border|buffered|challenge|charset|checked|cite|class|code|codebase|color|cols|colspan|content|http-equiv|contenteditable|contextmenu|controls|coords|data|datetime|default|defer|dir|dirname|disabled|download|draggable|dropzone|attribute|enctype|for|form|formaction|headers|accept|accept-charset|accesskey|action|align|alt|async|autocomplete|autofocus|autoplay|autosave|bgcolor)\b)+(?=(.*?&gt;|&gt;))(?![^<]*>)(?![^(&gt;)]*&lt;)(?![^(&quot;)]*&quot;)/gm;
    reg = regexlang[langnum];
    
    //regcomment2 =/(\/\/\/[\w\s\'\"<>][^\n]*)|(\/\/[\w\s\'\"<>][^\n]*)|(\/\/).*?\n/gm;
    regcomment2 = /(\/\/\/[\w\s(\&quot\;)(\&#39\;)(\&gt\;)(\&lt\;)<>][^\n]*)|(\/\/[\w\s(\&quot\;)(\&#39\;)(\&gt\;)(\&lt\;)<>][^\n]*)|(\/\/).*?\n/gm;
    regcomment = /(\/\*[^*]*(?:\*+(?!\/)[^*]*)*\*\/)/g;
    regcomment3 =/(\/(?![span>])(?![\*)(?![\/\/\s<])(?![\/\/<]).*[^<]\/[igm\s]{0,3})/g;
    regclean = /\<span class\=\'commento\'\>(.|\n|\r|\s)*?\<\/span ok>/gm;
    regws =/\B&nbsp;\B/g;
    regstrings = /\B<span class='stringhe'>\B/g ;
    regstringe = /\B<\/span>\B/g ;
    regbracket =/(?:\(|\)|\[|\]|\{|\}|&lt;\?php|&lt;\?|\?&gt;)(?=(?:[^"]*"[^"]*")*[^"]*$)(?=(?:[^']*'[^']*')*[^']*$)(?![^<]*>)(?![^\/*]*\*\/)(?![^\/*]*\*\/)/g;
    regstring =/(\/\*[^*]*(?:\*+(?!\/)[^*]*)*\*\/)|&quot;[^\\]*(?:\\[\s\S][^\\]*)*&quot;|&#39;[^\\]*(?:\\[\s\S][^\\]*)*&#39;|\/\/[^\n]*/g;
    regstringhtml = /&quot;.*?&quot;|&#39;.*?&#39;/g;
    //regstring = /(\/\*[^*]*(?:\*+(?!\/)[^*]*)*\*\/)|&quot;[^&quot;\\]*(?:\\[\s\S][^&quot;\\]*)*&quot;|'[^'\\]*(?:\\[\s\S][^'\\]*)*'|\/\/[^\n]*/g;
    regtab= /<blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;">/gm;
    regtabfine =/<\/blockquote>/gm;
    regani =/\breservada.+zz\b/gm;
    reganidelete =/\banimationzzz\b/gm;
    regdiv1 = /<[^>]*\/div>/gm;
    regdiv2 = /<[^>]*div>/gm;
    nmr = [];
    numeri = "";
    finale = document.getElementById("principale").innerHTML;
    finale = finale.replace(/"/gm, "&quot;");
    finale = finale.replace(/'/gm, "&#39;");
    console.log("Finale1 = "+ finale);
    if(langnum==2){
    finale = finale.replace(regstringhtml, "<span class='stringhe"+langnum+"'>$&</span>");
    }else{
    finale = finale.replace(regstring, "<span class='stringhe"+langnum+"'>$&</span>");
    }
    console.log("Finale2 = "+ finale);
    finale = finale.replace(reg, "<span class='reservada"+langnum+"zz'>$&</span>");
    console.log("Finale3 = "+ finale);
    finale = finale.replace(regani, "$& animationzzz");
    finale = finale.replace(regbracket, "<span class='parentesi"+langnum+"'>$&</span>");
    
    
    if(langnum==2){
    
    }else{
    
    finale = finale.replace(regcomment,"<span class='commento'>$&</span>");
    finale = finale.replace(regcomment2,"<span class='commento2'>$&</span>");
    finale = finale.replace(regcomment3,"<span class='stringhe"+langnum+"'>$&</span>");
    }
    
    if(langnum==2){
    finale = finale.replace(/&gt;|&lt;\/.*?&gt;|&lt;/gm, "<span class='reservada"+langnum+"zz'>$&</span>");
    finale = finale.replace(regattribute,"<span class='attributi'>$&</span>");
    };
    console.log("Finale = "+ finale);
    //check comments style
    
    if(langnum==2){}else{
     
    if(finale.match(regcomment2)){
        var str = finale.match(regcomment2);
        str = str.toString();
        var arr = str.split(",");
        var arrcheck = str.split(",");
        var text = "";
        var i;
        for (i = 0; i < arr.length; i++) {
        arr[i]= arr[i].replace(/<[^<>]*?span>|<span[^><]*?>/g,"");
        finale = finale.replace(arrcheck[i],arr[i]+"</span></span>");
    
        }
    }
    
    if(finale.match(regcomment)){
        var str = finale.match(regcomment);
        str = str.toString();
        var arr = str.split(",");
        var arrcheck = str.split(",");
        var text = "";
        var i;
        for (i = 0; i < arr.length; i++) {
        arr[i]= arr[i].replace(/<[^<>]*?span>|<span[^><]*?>/g,"");
        finale = finale.replace(arrcheck[i],arr[i]);
        }
    }
    
    if(finale.match(regcomment3)){
        var str = finale.match(regcomment3);
        str = str.toString();
        var arr = str.split(",");
        var arrcheck = str.split(",");
        var text = "";
        var i;
        for (i = 0; i < arr.length; i++) {
        arr[i]= arr[i].replace(/<[^<>]*?span>|<span[^><]*?>/g,"");
        finale = finale.replace(arrcheck[i],arr[i]);
        }
    }
    }
    document.getElementById("controllo").innerHTML = finale;
   
    // count rows number   
    divHeight = document.getElementById("principale").offsetHeight;
    lineHeight = 20;
    linee = divHeight / lineHeight;
    if(linee <=1){
        linee=1;
    }
    
    for(i=0;i<linee+1;i++){
    numeri += i + 1 + " <br>";
    nmr.push(numeri); 
    }
    document.getElementById("colonne").innerHTML = nmr[nmr.length-2];
    
    
}


    // download my file

function salva(filename, principale, mimeType) {
    // choose file name
    var filename = prompt("Save file as : ", "yourfile.js");
    var link = document.getElementById("link");
    qualeb();
    // making output
    reg1 = /\n/gm;
    reg2 = /<[^>]*?br>/gm;
    reg3 = /&nbsp;/gm;
    reg4 = /&lt;/gm;
    reg5 = /&gt;/gm;
    var htmlpulito = document.getElementById("principale").innerHTML;
    var htmlpulito = htmlpulito.replace(reg1,"<br>");
    var htmlpulito = htmlpulito.replace(reg2,"\r\n");
    var htmlpulito = htmlpulito.replace(reg3," ");
    var htmlpulito = htmlpulito.replace(reg4,"<");
    var htmlpulito = htmlpulito.replace(reg5,">");
    
    mimeType = mimeType || 'text/plain';
   
    if (msie=="MSIE"){ 
    var htmlpulito = htmlpulito.replace(/^\s+/,"");
    var blobObject = new Blob([htmlpulito]); 
    window.navigator.msSaveBlob(blobObject, filename); 
    }else{
    document.getElementById("link").setAttribute('download', filename);
    document.getElementById("link").setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(htmlpulito));
    document.getElementById("link").click(); 
    
    }   
}

// function keys escape,enter

function pasteHtmlAtCaret(html) {
    var sel, range;
    if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            // potrei usare Range.createContextualFragment() would be useful here but is
            // only relatively recently standardized and is not supported in
            // some browsers (IE9, for one)
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);

            // Preserve the selection
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {
        // IE < 9
        document.selection.createRange().pasteHTML(html);
    }
}

//Function escape for all browsers

$("#principale,#controllo").keydown(function(e)
    {
    var e = e || window.event;
    var keyCode = e.keyCode || e.which;
    qualeb();
    //console.log("MSIE = " + msie)   
    if (keyCode == 9){
        e.preventDefault();
        if(msie=="MSIE"){
        pasteHtmlAtCaret("&nbsp;&nbsp;&nbsp;&nbsp;");
        }else{
        document.execCommand('insertHTML', null, "&nbsp;&nbsp;&nbsp;&nbsp;");
        }
                
    }
    if (keyCode == 13){
    e.preventDefault();
        if(msie=="MSIE"){
        pasteHtmlAtCaret("\n");
        }else{
       pasteHtmlAtCaret("\n");    
        }
    }
    
});

function cancella(){
    if(document.getElementById("principale").innerHTML == "Welcome in Squidojo v0.0"){
        document.getElementById("principale").innerHTML = "";
    }
}


