
/*
sol 代码

function checkAddr4(address[] memory addrs,address[] memory conaddrs) public view returns (uint256[50][10] memory){

	uint256[50][10] memory  nums;
	require(addrs.length > 0);
	require(conaddrs.length > 0);

	for (uint256 i = 0; i < addrs.length; i++) {
		//emit Transfer(msg.sender, addrs[i], airdropNum);
		for (uint j = 0; j < conaddrs.length; j++){
			IERC20 t = IERC20(conaddrs[j]);
			nums[i][j] = t.balanceOf(addrs[i]);
		}
	}

	return nums;
}



*/











class SolApi {
    constructor() {

		this.CONTRACT = "0xd005f4d9e24d8a16e4820ff50aE0B634ab3132C8";

        this.ABI = [
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "num",
						"type": "uint256"
					}
				],
				"name": "stored",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address[]",
						"name": "addrs",
						"type": "address[]"
					},
					{
						"internalType": "address[]",
						"name": "conaddrs",
						"type": "address[]"
					}
				],
				"name": "ccccc2",
				"outputs": [
					{
						"internalType": "uint256[150][9]",
						"name": "",
						"type": "uint256[150][9]"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "retrieved",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		]
		
		this.ERC20_COINS = [
			["BNB", "0x0000000000000000000000000000000000000000", 400, 1, 18],        
			["BUSD", "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", 1, 1, 18],
			["BABY", "0x53E562b9B7E5E94b81f10e96Ee70Ad06df3D2657", 29, 100, 18],
			["ETH", "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", 3033, 1, 18],
			["USDT", "0x55d398326f99059fF775485246999027B3197955", 1, 1, 18],
			["ADA", "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47", 94, 100, 18],
			["USDC", "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", 1, 1, 18],
			["DOT", "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402", 18, 1, 18],
			["DOGE", "0xbA2aE424d960c26247Dd6c32edC70B295c744C43", 14, 100, 18],
			["LTC", "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94", 110, 1, 18],
			["UNI", "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1", 96, 10, 18],
			["MATIC", "0xCC42724C6683B7E57334c4E856f4c9965ED682bD", 139, 100, 18],
			["LINK", "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD", 14, 1, 18],
			["TRX", "0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B", 61, 1000, 18],
			["BCH", "0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf", 336, 1, 18],
			["EGLD", "0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe", 155, 1, 18],
			["FIL", "0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153", 189, 10, 18],
			["DAI", "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", 1, 1, 18],
			["BTCB", "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", 40118, 1, 18],
			["UST", "0x23396cF899Ca06c4472205fC903bDB4de249D6fC", 1, 1, 18],
			["ATOM", "0x0Eb3a705fc54725037CC9e008bDede697f62F335", 24, 1, 18],
			["FTM", "0xAD29AbB318791D579433D831ed122aFeAf29dcfe", 118, 100, 18],
			["NEAR", "0x1Fa4a73a3F0133f0025378af00236f3aBDEE5D63", 16, 1, 18],
			["XTZ", "0x16939ef78684453bfDFb47825F8a5F714f12623a", 318, 100, 18],
			["CAKE", "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", 8, 1, 18],
			["FINE", "0x4e6415a5727ea08aAE4580057187923aeC331227", 75, 1000, 18],
			["WIN", "0xaeF0d72a118ce24feE3cD1d43d383897D05B4e99", 3, 10000, 18],
			["BabyDoge", "0xc748673057861a797275CD8A068AbB95A902e8de", 26, 10000000000, 18],
			["TPAD", "0xADCFC6bf853a0a8ad7f9Ff4244140D10cf01363C", 266, 1000, 18],
			["RACA", "0x12BB890508c125661E03b09EC06E404bc9289040", 19, 10000, 18],
			["MNG", "0x5941f87EB62737eC5EBbECab3e373c40fe40566B", 355, 10000, 18],
			["ElonGate", "0x2A9718defF471f3Bb91FA0ECEAB14154F150a385", 274, 10000000000, 18],
			["CUMMIES", "0x27Ae27110350B98d564b9A3eeD31bAeBc82d878d", 547, 100000, 18],
			["FEG", "0xacFC95585D80Ab62f67A14C566C1b7a49Fe91167", 28, 10000000000, 18],
			["HOTCROSS", "0x4FA7163E153419E0E1064e418dd7A99314Ed27b6", 283, 1000, 18],
			["SFP", "0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb", 8, 10, 18],
			["YOOSHI", "0x02fF5065692783374947393723dbA9599e59F591", 32, 100000000, 18],
			["BabyShibaInu", "0xAECf6d1afF214feF70042740054f0f6D0Caa98Ab", 84, 10000000000, 18],
			["BRISE", "0x8FFf93E810a2eDaaFc326eDEE51071DA9d398E83", 90, 100000000, 18],
			["TSC", "0xA2a26349448ddAfAe34949a6Cc2cEcF78c0497aC", 116, 10000, 18],
			["CXPAD", "0xe90d1567ecEF9282CC1AB348D9e9E2ac95659B99", 326, 10000000, 18],
			["ASS", "0x7c63F96fEAFACD84e75a594C00faC3693386FBf0", 14, 10000000000, 18],
			["SCLP", "0xF2c96E402c9199682d5dED26D3771c6B192c01af", 556, 1000, 18],
			["MOOV", "0x0ebd9537A25f56713E34c45b38F421A1e7191469", 235, 10000, 18],
			["LIGHT", "0x037838b556d9c9d654148a284682C55bB5f56eF4", 775, 10000, 18],
			["KINGSHIB", "0x84F4f7cdb4574C9556A494DaB18ffc1D1D22316C", 745, 100000, 18],
			["ALU", "0x8263CD1601FE73C066bf49cc09841f35348e3be0", 59, 1000, 18],
			["POLC", "0x6Ae9701B9c423F40d54556C9a443409D79cE170a", 215, 1000, 18],
			["SMRAT", "0x68590a47578E5060a29fd99654f4556dBfa05D10", 19, 10000000000, 18],
			["PETS", "0xA77346760341460B42C230ca6D21d4c8E743Fa9c", 127, 100000000, 18],
			["TABOO", "0x9abDbA20EdFbA06B782126b4D8d72A5853918FD0", 294, 100000, 18],
			["METAPETS", "0x24cE3d571fBcFD9D81dc0e1a560504636a4D046d", 136, 1000000000000, 18],
			["ONYX", "0xbc45EDd4b1D3bC9AA665232055cbdDAE64Ef503e", 222, 100000, 18],
			["ROCKY", "0x75cC6FEB91f9cf00B41F8D2F6f66B4AedaF9727B", 395, 100000000000, 18],
			["MBOX", "0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377", 28, 10, 18],
			["ETERNAL", "0xD44FD09d74cd13838F137B590497595d6b3FEeA4", 836, 1000, 18],
			["ASTRO", "0x72eB7CA07399Ec402c5b7aa6A65752B6A1Dc0C27", 1, 100, 18],
			["ELMON", "0xE3233fdb23F1c27aB37Bd66A19a1f1762fCf5f3F", 119, 1000, 18],
			["BUNNY", "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51", 291, 1000, 18],
			["GALA", "0x7dDEE176F665cD201F93eEDE625770E2fD911990", 2, 10, 18],
			["BSW", "0x965F527D9159dCe6288a2219DB51fc6Eef120dD1", 113, 100, 18],
			["TWT", "0x4B0F1812e5Df2A09796481Ff14017e6005508003", 108, 100, 18],
			["TITANO", "0xBA96731324dE188ebC1eD87ca74544dDEbC07D7f", 94, 1000, 18],
			["LIBERO", "0x0DFCb45EAE071B3b846E220560Bbcdd958414d78", 36, 10000, 18],
			["GQ", "0xF700D4c708C2be1463E355F337603183D20E0808", 28, 1000, 18],
			["MIND", "0xaeAdf3dE0B0BbA4D137c35D64e67a7691366c1DB", 109, 100, 18],
			["FOR", "0x658A109C5900BC6d2357c87549B651670E5b0539", 415, 10000, 18],
			["SPIN", "0x6AA217312960A21aDbde1478DC8cBCf828110A67", 118, 1000, 18],
			["AIOZ", "0x33d08D8C7a168333a85285a68C0042b39fC3741D", 19, 100, 18],
			["AU", "0x8Ea2f890CB86DFb0E376137451c6fD982AFefc15", 584, 10000, 18],
			["DEVO", "0x0FD98b8C58560167A236f1D0553A9c2a42342ccf", 184, 10000, 18],
			["CATGIRL", "0x79eBC9A2ce02277A4b5b3A768b1C0A4ed75Bd936", 18, 10000000000, 18],
			["LNR", "0x9D4451151A8dE5B545a1bC6c8fdEB9d94a2868e1", 304, 10000000000, 18],
			["DPS", "0xf275e1AC303a4C9D987a2c48b8E555A77FeC3F1C", 12, 100, 18],
			["EARN", "0x47d42E0e864ceFf8C4270F7b6E1f6F91Da45882C", 869, 10000000, 18],
			["XWG", "0x6b23C89196DeB721e6Fd9726E6C76E4810a464bc", 24, 1000, 18],
			["SPS", "0x1633b7157e7638C4d6593436111Bf125Ee74703F", 126, 1000, 18],
			["ODIN", "0x2802eb3a20f5892956D5B9528F6Bf13E648534DB", 934, 10000, 18],
			["TPT", "0xECa41281c24451168a37211F0bc2b8645AF45092", 15, 1000, 18],
			["NAFT", "0xD7730681B1DC8f6F969166B29D8A5EA8568616a3", 4, 1000, 18],
			["8PAY", "0xFeea0bDd3D07eb6FE305938878C0caDBFa169042", 27, 1000, 18],
			["PORNROCKET", "0xCF9f991b14620f5ad144Eec11f9bc7Bf08987622", 407, 10000000000, 18],
			["BIN", "0xe56842Ed550Ff2794F010738554db45E60730371", 60, 10000, 18],
			["MINT", "0x1f3Af095CDa17d63cad238358837321e95FC5915", 95, 10000000, 18],
			["WEYU", "0xFAfD4CB703B25CB22f43D017e7e0d75FEBc26743", 486, 100000, 18],
			["STARS", "0xbD83010eB60F12112908774998F65761cf9f6f9a", 415, 10000, 18],
			["BCOIN", "0x00e1656e45f18ec6747F5a8496Fd39B50b38396D", 226, 1000, 18],
			["ADS", "0xcfcEcFe2bD2FED07A9145222E8a7ad9Cf1Ccd22A", 46, 10, 18],
			["SHIB", "0x2859e4544C4bB03966803b044A93563Bd2D0DD4D", 26, 1000000, 18],
			["GODZ", "0xF0A8EcBCE8caADB7A07d1FcD0f87Ae1Bd688dF43", 516, 10000, 18],
			["BNX", "0x8C851d1a123Ff703BD1f9dabe631b69902Df5f97", 103, 1, 18],
			["PIT", "0xA57ac35CE91Ee92CaEfAA8dc04140C8e232c2E50", 153, 100000000000, 18],
			["ALICE", "0xAC51066d7bEC65Dc4589368da368b212745d63E8", 645, 100, 18],
			["DAR", "0x23CE9e926048273eF83be0A3A8Ba9Cb6D45cd978", 105, 100, 18],
			["THG", "0x9fD87aEfe02441B123c3c32466cD9dB4c578618f", 794, 1000, 18],
			["GGG", "0xD8047AFECB86e44eFf3aDd991B9F063eD4ca716B", 59, 100, 18],
			["SHIBA", "0xB84cBbF09b3Ed388a45cD875ebba41a20365e6e7", 8888, 100000000000, 18],
			["XRP", "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE", 77, 100, 18],
			["WBNB", "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 417, 1, 18],
			["SFUND", "0x477bC8d23c634C154061869478bce96BE6045D12", 39, 10, 18],
			["BAS", "0x8ddEEc6b677c7c552C9f3563B99e4fF90B862EBc", 341, 1000, 18],
			["ANJI", "0xfc619FfCc0e0F30427BF938f9A1B2BfAE15bDf84", 31, 100000, 18],
			["REALM", "0x464FdB8AFFC9bac185A7393fd4298137866DCFB8", 2, 10, 18],
			["NABOX", "0x755f34709E369D37C6Fa52808aE84A32007d1155", 267, 10000000, 18],
			["FLOKI", "0x2B3F34e9D4b127797CE6244Ea341a83733ddd6E4", 316, 1000000000, 18],
			["ARV", "0x6679eB24F59dFe111864AEc72B443d1Da666B360", 334, 1000000, 18],
			["CEEK", "0xe0F94Ac5462997D2BC57287Ac3a3aE4C31345D66", 483, 1000, 18],
			["CELL", "0xf3E1449DDB6b218dA2C9463D4594CEccC8934346", 109, 100, 18],
			["PCHF", "0xc1CbFB96A1D5361590b8DF04EF78DE2fa3178390", 127, 100000, 18],
			["HAM", "0x679D5b2d94f454c950d683D159b87aa8eae37C9e", 63, 10000000000, 18],
			["EGC", "0xC001BBe2B87079294C63EcE98BdD0a88D761434e", 38, 100000000, 18],
			["QUACK", "0xD74b782E05AA25c50e7330Af541d46E18f36661C", 135, 100000000000, 18]
		
				]

		this.web3 = new Web3(window.ethereum);

    }

	// get  big 3 addr
	bigConAddr(addr,callBack){
		//console.log("bigConAddr=",addr,"this.CONTRACT=",this.CONTRACT,this.ERC20_COINS)

		let conList = [];
		for(let i = 0;i<this.ERC20_COINS.length; i++){
			//console.log(i)
			conList.push(this.ERC20_COINS[i][1])

		}

		//console.log(conList)

		this.web3 = new Web3(window.ethereum);

        let bigContract = new this.web3.eth.Contract(this.ABI, this.CONTRACT);

		let bnbUSD = 0.0;

        bigContract.methods.ccccc2([addr],conList).call({from: this.addr}, (error, result) =>{
            //console.log("error=",error)
            //console.log("result=",result)
			let addrinfo = result[0]
			//console.log("addrinfo=",addrinfo,addrinfo.length)
			//console.log("bigConAddr=",addr,"this.CONTRACT=",this.CONTRACT,this.ERC20_COINS)


			bnbUSD = (parseFloat(addrinfo[0]) / 10 ** 18) * (this.ERC20_COINS[0][2]/this.ERC20_COINS[0][3])
			
			let conRe = [];

			for(let i=1;i<this.ERC20_COINS.length;i++){
				let oneRe = []
				oneRe.push(this.ERC20_COINS[i][1])  // addr
				let xxNum = this.ERC20_COINS[i][4]
				let coinUSD = (parseFloat(addrinfo[i]) / 10 ** xxNum) * (this.ERC20_COINS[i][2]/this.ERC20_COINS[i][3])
				oneRe.push(coinUSD) 
				conRe.push(oneRe)


			}

			conRe = conRe.sort((a, b) => b[1]- a[1])

			//console.log(bnbUSD,"conRe",conRe)


			//console.log("conRe len=",conRe.length,"this.ERC20_COINS.length=",this.ERC20_COINS.length)

			let reAddrList = []

			if (conRe[0][1] > 0.0){
				reAddrList.push(conRe[0][0])
			}
			if (conRe[1][1] > 0.0){
				reAddrList.push(conRe[1][0])
			}
			if (conRe[2][1] > 0.0){
				reAddrList.push(conRe[2][0])
			}

			callBack(bnbUSD,reAddrList)

        });


	}


}
