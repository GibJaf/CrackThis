function search() {
    
    var ssid_arr = ["abc" , "def" , "ghi" , "jkl"];
    var pass_arr = ["123" , "456" , "789" , "101"]
        
    var ssid = document.getElementById("ssid").value;
    if (ssid_arr.includes(ssid))
        {
            var pos = ssid_arr.indexOf(ssid);
            document.getElementById("pass").value = pass_arr[pos];
        }
    else
        {
            document.getElementById("pass").value = " No password available ";
        }
}

function append() {
    var ssid_arr = document.getElementById("ssid").value;
    var curr_pass = document.getElementById("pass").value;
    
    document.getElementById("pass").value = curr_pass.concat(ssid_arr);
}



