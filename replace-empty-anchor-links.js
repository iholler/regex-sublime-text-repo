/*
=================================
RegEx Replace Empty Hashtag Links
href="#" => href=""
=================================

Replaces:
href="#"
href='#'
href=#

Does not replace hrefs with specified anchor points:
href="#sometag"
*/

//Sublime Text:
href=([":'](?=#[":']))?#(?![a-z])[":']?


//Javascript
//code provided by http://www.regex101.com

var re = /href=([":'](?=#[":']))?#(?![a-z])[":']?/gmi; 
var str = 'href="#"\nhref=\'#\'\nhref=#\n\nhref="#Test"\nhref="#test"\n\nhref=\'#Test\'\nhref=\'#test\'\n\nhref=#test';
var m;
 
while ((m = re.exec(str)) !== null) {
    if (m.index === re.lastIndex) {
        re.lastIndex++;
    }
    // View your result using the m-variable.
    // eg m[0] etc.
}
