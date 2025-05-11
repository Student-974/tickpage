//صفحة التذاكر 1

function alfun(){
    alert("انت بالفعل في صفحة التذاكر")
}

//صفحة التذاكر 2

function calcpr(aop, ntc) {
    return (aop * ntc);
}

function resfun() {

    const tdate = document.getElementById("tdate").value;
    const noac = parseInt(document.getElementById("noac").value) || 0;
    const noas = parseInt(document.getElementById("noas").value) || 0;
    const noaa = parseInt(document.getElementById("noaa").value) || 0;
    const nonac = parseInt(document.getElementById("nonac").value) || 0;
    const nonas = parseInt(document.getElementById("nonas").value) || 0;
    const nonaa = parseInt(document.getElementById("nonaa").value) || 0;
    const tikbot = parseInt(document.getElementById("tikbot").value) || 0;
    const tikvid = parseInt(document.getElementById("tikvid").value) || 0;

    const fname = document.getElementById("fname").value;
    const sname = document.getElementById("sname").value;
    const telnum = document.getElementById("telnum").value;
    const emad = document.getElementById("emad").value;
    

    const totnoac = calcpr(noac, 0);
    const totnoas = calcpr(noas, 10);
    const totnoaa = calcpr(noaa, 30);
    const totnonac = calcpr(nonac, 0);
    const totnonas = calcpr(nonas, 275);
    const totnonaa = calcpr(nonaa, 550);
    const tottikbot = calcpr(tikbot, 0);
    const tottikvid = calcpr(tikvid, 300);

    const totmon = totnoas + totnoaa + totnonas + totnonaa + tottikvid;



    localStorage.setItem("tdate", tdate);
    localStorage.setItem("noac", noac);
    localStorage.setItem("noas", noas);
    localStorage.setItem("noaa", noaa);
    localStorage.setItem("nonac", nonac);
    localStorage.setItem("nonas", nonas);
    localStorage.setItem("nonaa", nonaa);
    localStorage.setItem("tikbot", tikbot);
    localStorage.setItem("tikvid", tikvid);

    localStorage.setItem("totnoac", totnoac);
    localStorage.setItem("totnoas", totnoas);
    localStorage.setItem("totnoaa", totnoaa);
    localStorage.setItem("totnonac", totnonac);
    localStorage.setItem("totnonas", totnonas);
    localStorage.setItem("totnonaa", totnonaa);
    localStorage.setItem("tottikbot", tottikbot);
    localStorage.setItem("tottikvid", tottikvid);
    localStorage.setItem("totmon", totmon);

    localStorage.setItem("fname", fname);
    localStorage.setItem("sname", sname);
    localStorage.setItem("telnum", telnum);
    localStorage.setItem("emad", emad);




    document.getElementById("refname").textContent = fname;
    document.getElementById("resname").textContent = sname;
    document.getElementById("retdate").textContent = tdate;
    
    document.getElementById("renoac").textContent = noac;
    document.getElementById("renoas").textContent = noas;
    document.getElementById("renoaa").textContent = noaa;
    document.getElementById("renonac").textContent = nonac;
    document.getElementById("renonas").textContent = nonas;
    document.getElementById("renonaa").textContent = nonaa;
    document.getElementById("retikbot").textContent = tikbot;
    document.getElementById("retikvid").textContent = tikvid;

    document.getElementById("retotnoac").textContent = totnoac;
    document.getElementById("retotnoas").textContent = totnoas;
    document.getElementById("retotnoaa").textContent = totnoaa;
    document.getElementById("retotnonac").textContent = totnonac;
    document.getElementById("retotnonas").textContent = totnonas;
    document.getElementById("retotnonaa").textContent = totnonaa;
    document.getElementById("retottikbot").textContent = tottikbot;
    document.getElementById("retottikvid").textContent = tottikvid;
    document.getElementById("retotmon").textContent = totmon;

    document.getElementById("retelnum").textContent = telnum;
    document.getElementById("reemad").textContent = emad;


    document.getElementById("formtik").style.display = "none";
    document.getElementById("restik").style.display = "block";
}

function formfun() {

    document.getElementById("formtik").style.display = "block";
    document.getElementById("restik").style.display = "none";
}

function evfun(evt) {
    evt.preventDefault();
    resfun();
}

function ext() {

    const dido = document.getElementById("tickets");
    if (dido) {
        dido.addEventListener("submit", evfun);
    }
    
    const rishi = document.getElementById("restik");
    if (rishi) {
        rishi.style.display = "none";
    }
    
    
}

document.addEventListener("DOMContentLoaded", ext);