function filter()
    {  
        var input = document.getElementById("name").value.toUpperCase();   // tr.length is length of "tr" array.
        var tr = document.getElementsByTagName("tr");                      // Here "tr" is like an array of all table rows 
        for (var i = 1;i < tr.length;i++){                    // here variable "i" is 1 initially because we don't want to include headings in search function.
            var td = tr[i].getElementsByTagName("td")[1].innerText.toUpperCase();  // "td" is second element of tr[i], "innerText" gives access to text inside <td> or <th>.
            if(td.indexOf(input) > -1){                 //  "String1.indexOf(String2)"  will search for String2 in String1 and...
                tr[i].style.display = "";               //  ...gives index of first element of String2 in String1 and returns -1 if String2 not found in String1.
            }else{
                tr[i].style.display = "none";
            }
        }
    }