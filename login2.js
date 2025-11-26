var attempt = 3; // jumlah percubaan yang dibenarkan (mula dengan 3)

// Fungsi ini akan berjalan bila pengguna tekan butang login
function validate(){

var username = document.getElementById("username").value; // ambil nilai input username
var password = document.getElementById("password").value; // ambil nilai input password

// Semak sama ada username & password betul
if ( username == "Formget" && password == "formget#123"){
    alert ("Login successfully"); // paparkan mesej berjaya
    window.location = "BMI_kira.html"; // pergi ke halaman lain selepas login
    return false; // hentikan fungsi
}
else{
    attempt --; // kurangkan bilangan percubaan sebanyak 1
    alert("You have left "+attempt+" attempt;"); // paparkan baki percubaan

    // Kalau percubaan habis (0), disable semua input
    if( attempt == 0){
        document.getElementById("username").disabled = true; // kunci input username
        document.getElementById("password").disabled = true; // kunci input password
        document.getElementById("submit").disabled = true; // kunci butang submit
        return false; // hentikan fungsi
    }
}

}
