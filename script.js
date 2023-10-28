// for dashboard
function dashMenu() {
    let menu = document.querySelector("#menu-bar");
    let navigation = document.querySelector(".left-nav");
    let sidenav = document.querySelector('.sidenav');
    let box = document.querySelector(".box");
    let icongraphy = document.querySelectorAll(".icongraphy");
    let icongraphy1 = document.querySelector(".icongraphy1");
    let info = document.querySelectorAll(".info");

    menu.addEventListener("click", () => {
        sidenav.classList.add('active');
        navigation.classList.add('active');
        box.classList.add('active');
        icongraphy1.classList.add('active');
        info.forEach(e => {
            e.classList.add('active')
        });
        icongraphy.forEach(e => {
            e.classList.add('active');
        });
    });
}

function openMenu() {

    let navigation = document.querySelector(".left-nav");
    let sidenav = document.querySelector('.sidenav');
    let box = document.querySelector(".box");
    let openmenu = document.querySelector("#openmenu");
    let icongraphy = document.querySelectorAll(".icongraphy");
    let icongraphy1 = document.querySelector(".icongraphy1");
    let info = document.querySelectorAll(".info");



    openmenu.addEventListener('click', () => {
        sidenav.classList.remove('active');
        navigation.classList.remove('active');
        box.classList.remove('active');
        icongraphy1.classList.remove('active');
        info.forEach(e => {
            e.classList.remove('active')
        });
        icongraphy.forEach(e => {
            e.classList.remove('active');
        });
    });
}
// for dashboard


// for all

function subDashMenu() {

    let menu = document.querySelector("#menu-bar");
    let navigation = document.querySelector(".left-nav");
    let sidenav = document.querySelector('.sidenav');
    let box = document.querySelector(".box")


    menu.addEventListener("click", () => {
        sidenav.classList.add('active');
        navigation.classList.add('active');
        box.classList.add('active');

    })


};

function subOpenMenu() {

    let navigation = document.querySelector(".left-nav");
    let sidenav = document.querySelector('.sidenav');
    let box = document.querySelector(".box");
    let openmenu = document.querySelector("#openmenu");


    openmenu.addEventListener('click', () => {
        sidenav.classList.remove('active');
        navigation.classList.remove('active');
        box.classList.remove('active');
    })
}
// for all


//  fincae page js start

function bothFinace() {

    onTab();
    getAjaxOnFinace()

}
function bothFinace1() {
    onTab();
    getAjaxOnFinace1();
}

function onTab() {
    let tab = document.querySelectorAll('.tab1')

    tab.forEach(e => {
        e.addEventListener('click', () => {
            tab.forEach(x => {
                x.classList.remove('active');
            })
            e.classList.add('active');
        })
    })
};

function getAjaxOnFinace() {
    let invo = document.getElementById('invo');
    let demo = document.querySelector('.demotabel')

    invo.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 200) {
                demo.innerHTML = xhr.responseText;
            }

        };
        xhr.open('GET', 'ajaxfile/financeajax.html', true);
        xhr.send();
    })

};

function getAjaxOnFinace1() {
    let invo1 = document.getElementById('invo1');
    let demo = document.querySelector('.demotabel')


    invo1.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 200) {
                demo.innerHTML = xhr.responseText;
            }

        };
        xhr.open('GET', 'ajaxfile/finance2ajax.html', true);
        xhr.send();
    })

}



//  fincae page js end


// pricing page js start




function getBox1() {
    let box1 = document.querySelectorAll(".box1");


    box1.forEach(e => {
        e.addEventListener('click', () => {
            box1.forEach(x => {
                x.classList.remove('active');
            })
            changeImage();
            e.classList.add('active');
        })
    })

}
let toggle = true;

function changeImage() {

    let img = document.getElementById('materialimg');
    let img2 = document.getElementById('materialimg1');
    let img3 = document.getElementById('materialimg2');


    if (toggle) {
        img.src = 'images/materialimglight.png'
        img2.src = 'images/metarialimgdark2.png'
        img3.src = 'images/metarial-2.png'
        toggle = false;
    }
    else if (toggle) {
        img.src = 'images/materialimglight.png'
        img2.src = 'images/metarial-1.png'
        img3.src = 'images/metarialimgdark3.png'
        toggle = false;
    }
    else {
        img.src = 'images/materialimglight.png'
        img2.src = 'images/metarial-1.png'
        img3.src = 'images/metarial-2.png'
        toggle = true;
    }
}





function tripleBox1() {
    getBox1();
    getAjaxOnPrice1();
}

function tripleBox2() {
    getBox1();
    getAjaxOnPrice();
}
function tripleBox3() {
    getBox1();
    getAjaxOnPrice2();
}





function getAjaxOnPrice() {

    let btn = document.getElementById('btn');
    let container = document.getElementById('demo');


    btn.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 200) {
                container.innerHTML = xhr.responseText;
            }

        };
        xhr.open('GET', 'ajaxfile/ajax.html', true);
        xhr.send();
    })

}


function getAjaxOnPrice1() {
    let btn2 = document.getElementById('btn2');
    let container = document.getElementById('demo');


    btn2.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 200) {
                container.innerHTML = xhr.responseText;
            }

        };
        xhr.open('GET', 'ajaxfile/ajax2.html', true);
        xhr.send();
    })
}
function getAjaxOnPrice2() {
    let btn3 = document.getElementById('btn3');
    let container = document.getElementById('demo');

    btn3.addEventListener("click", () => {


        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 200) {
                container.innerHTML = xhr.responseText;
            }

        };
        xhr.open('GET', 'ajaxfile/ajax3.html', true);
        xhr.send();
    })
}


function tabForPrice() {
    let tab = document.querySelectorAll(".tab");
    tab.forEach(e => {
        e.addEventListener('click', () => {
            tab.forEach(x => {
                x.classList.remove('active');
            })
            e.classList.add('active');
        })
    })
}

function colorRal() {
    let colorF = document.querySelector('.editactioncolor');

    colorF.classList.add('active')
}
function colorRal1() {
    let colorF = document.querySelector('.editactioncolor');

    colorF.classList.remove('active')
}

// pricing page js end


// order ja start 

function forTogglebtn() {
    let container = document.getElementById('demo');
    let toggled = document.querySelector('.toggle-1');
    let togglebtn = document.querySelector('.togglebtn');
    let text = document.querySelector('.text1');
    let metarialtabel = document.querySelector('.metarialtabel');

    togglebtn.addEventListener('click', () => {
        toggled.classList.toggle('active');

        if (toggled.classList.contains('active')) {
            text.innerHTML = 'tabel view';
        }
        else {
            text.innerHTML = 'analytic views';
        };
        if (toggled.classList.contains('active')) {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status === 200) {
                    metarialtabel.innerHTML = xhr.responseText;
                }

            };
            xhr.open('GET', 'ajaxfile/tabelajx.html', true);
            xhr.send();
        }
        else {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status === 200) {
                    container.innerHTML = xhr.responseText;
                }

            };
            xhr.open('GET', 'ajaxfile/orderajax.html', true);
            xhr.send();

        };



    });
};
function forTick() {

    let circle = document.querySelectorAll("#circle");
    let full = document.querySelector(".full2");
    let work = document.querySelector("#work");


    circle.forEach(e => {
        e.addEventListener('click', () => {
            full.classList.add('active');
        });
    });
    work.addEventListener('click', () => {
        full.classList.remove('active');
    })
}


function forBothOrder() {
    forOrderBox();
    getOrderAjax();
};
function forBothOrder1() {
    forOrderBox();
    getOrderAjax1();
};
function forBothOrder2() {
    forOrderBox();
    getOrderAjax2();
};


function forOrderBox() {
    let box2 = document.querySelectorAll(".box2");

    box2.forEach(e => {
        e.addEventListener('click', () => {
            box2.forEach(x => {
                x.classList.remove('active');
            })
            e.classList.add('active');
        })
    })
}
function getOrderAjax() {
    let btn = document.getElementById('btn');
    let container = document.getElementById('demo');

    btn.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 200) {
                container.innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', 'ajaxfile/activeajax.html', true);
        xhr.send();
    });


}

function getOrderAjax1() {
    let btn2 = document.getElementById('btn2');
    let container = document.getElementById('demo');


    btn2.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 200) {
                container.innerHTML = xhr.responseText;
            }

        };
        xhr.open('GET', 'ajaxfile/deliverdajax.html', true);
        xhr.send();
    });
}

function getOrderAjax2() {
    let container = document.getElementById('demo');

    let btn3 = document.getElementById('btn3');

    btn3.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 200) {
                container.innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', 'ajaxfile/completedajax.html', true);
        xhr.send();
    });
}

// order ja end

//  hard js start




function bothHard(){
    tabActiveHard();
    hardBtnCall();
}
function bothHard1(){
    tabActiveHard();
    hardBtnCall1();
}
function bothHard2(){
    tabActiveHard();
    hardBtnCall2();
}
function bothHard3(){
    tabActiveHard();
    hardBtnCall3();
}



function tabActiveHard() {
    let block = document.querySelectorAll('.block1');

    block.forEach(e => {
        e.addEventListener('click', () => {
            block.forEach(x => {
                x.classList.remove('active');
            });
            e.classList.add('active');
        });
    });
}


function hardBtnCall() {
    let container = document.querySelector('.hardbody')

    btn.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 200) {
                container.innerHTML = xhr.responseText;
            }

        };
        xhr.open('GET', 'ajaxfile/hard1ajax.html', true);
        xhr.send();
    });

}

function hardBtnCall1() {
    let container = document.querySelector('.hardbody')

    btn2.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 200) {
                container.innerHTML = xhr.responseText;
            }

        };
        xhr.open('GET', 'ajaxfile/hard2ajax.html', true);
        xhr.send();
    });
}


function hardBtnCall2() {

    let container = document.querySelector('.hardbody')

    btn3.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 200) {
                container.innerHTML = xhr.responseText;
            }

        };
        xhr.open('GET', 'ajaxfile/hardajax3.html', true);
        xhr.send();
    });
}


function hardBtnCall3(){
    let container = document.querySelector('.hardbody')



btn4.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status === 200) {
            container.innerHTML = xhr.responseText;
        }

    };
    xhr.open('GET', 'ajaxfile/hard2ajax1.html', true);
    xhr.send();
});
}

function needCall() {
    let questionClick = document.querySelector('.question');
    let tophard = document.querySelector('.tophard');

    questionClick.addEventListener('click', () => {
        tophard.classList.add('active');
    })
}

//  hard js enf

// requeset js start 

    function Getmach(){
       
        let container = document.querySelector("#demo")

       
        mach.addEventListener('click', () => {

            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status === 200) {
                    container.innerHTML = xhr.responseText;
                }
            };
            xhr.open('GET', 'ajaxfile/machineajax1.html', true);
            xhr.send();

       
            let plzON= xhr;

            if(plzON == true){
                 plzON= container.classList.remove('filter');
                
            }
        });

        
    }
    function getTabForrequest(){
        let tab = document.querySelectorAll(".tab")
        tab.forEach(e => {
            e.addEventListener('click', () => {
                tab.forEach(x => {
                    x.classList.remove('active');
                })
                e.classList.add('active');
            })
        })
    }

    function forBothRequest(){
        Getmach();
        getTabForrequest();
    }

// requeset js end 