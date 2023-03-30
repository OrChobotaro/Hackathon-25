const endInput = document.getElementById("endInput");
const allItems = document.getElementById("insertItems");

function addItem(){

    var item = document.createElement("div");
    

    item.innerHTML = '<div class="row"><div class="tfd"><input type ="text" id ="AmountInput" name="Amount" placeholder="כמות" required><br/></div>    <div class="tfd"><input type ="text" id ="ActivityInput" name="Activity" placeholder="פעילות" required><br/></div></div>';
    document.getElementById("insertItems").insertAdjacentElement("afterend", item);

};

const endInput2 = document.getElementById("endInput2");
const allItems2 = document.getElementById("insertItems2");

function addItem2(){

    var item = document.createElement("div");
    
    console.log("clickkkkk");
    item.innerHTML = '<div class="row"><div class="tfd"><input type ="text" id ="AmountInput" name="Freq" placeholder="תדירות" required><br/></div><div class="tfd"><div class="directorist-select directorist-select-multi tf" id="multiSelect" data-isSearch="true" data-max="5"><select name="mySelect" fdprocessedid="65ov3j"style="margin-top:10px;margin-bottom: 10px;"><option value="">Select</option><option value="1">advil 20mg</option><option value="1">advil 30mg</option><option value="2">moxypen</option><option value="3">lenton</option><option value="4">Colchicine</option><option value="1">Atorvastatin</option><option value="2">Azithromycin</option><option value="3">Beclometasone inhalers</option><option value="4">Colchicine</option><option value="5">Codeine</option><option value="1">Donepezil</option><option value="2">Dosulepin</option><option value="3">Doxazosin</option><option value="4">Doxycycline</option><option value="5">Eplerenone</option><option value="1">Erythromycin</option><option value="2">Escitalopram</option><option value="3">Esomeprazole</option></select></div>					                </div>';
    document.getElementById("insertItems2").insertAdjacentElement("afterend", item);

};
