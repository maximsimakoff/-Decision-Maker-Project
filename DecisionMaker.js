/*
                          THE APP LISTED IS STOCK-Y
Stock-y is an app where you can have the option to purchase different types of shoes

Our brands that are currently listed are Adidas-Nike-Jordan but we will be 
following up with more brands and accessory options like belts in future updates 
*/


/*----------------------------------------------------------------------------------------*/
//Variables
var comment;
var price_tax;
var price_tax_new;
var price_tax_fees;
/*----------------------------------------------------------------------------------------*/
//Feedback-Grab-Input & Place in feedback
onEvent("button2","click" , function( ) {
comment="FEEDBACK: "+getText("feedbackInput")+"\n";
setText("text_area1",comment);
});
/*----------------------------------------------------------------------------------------*/
//onEvent calling up the ATC and tax function to change the screen as well as caculate $
onEvent("Buy_A1", "click", function (){

ATC(); 
setText("order_total", "325");
tax();
fees();
});

onEvent("Buy_A2", "click", function (){
ATC(); 
setText("order_total", "525");
tax();
fees();
});  

onEvent("Buy_A3", "click", function (){
ATC(); 
setText("order_total", "185");
tax();
fees();
});

onEvent("Buy_J1", "click", function (){
ATC(); 
setText("order_total", "525");
tax();
fees();
});

onEvent("Buy_J2", "click", function (){
ATC(); 
setText("order_total", "220");
tax();
fees();
});

onEvent("Buy_J3", "click", function (){
ATC(); 
setText("order_total", "12220");
tax();
fees();
});

onEvent("Buy_N1", "click", function (){
ATC();
setText("order_total", "1050");
tax();
fees();
});

onEvent("Buy_N2", "click", function (){
ATC(); 
setText("order_total", "499");
tax();
fees();
});

onEvent("Buy_N3", "click", function (){
ATC(); 
setText("order_total", "2755");
tax();
fees();
});
/*----------------------------------------------------------------------------------------*/
//ATC is to bring you to your order info
//ATC stands for = "Add to Cart"
function ATC(){
setScreen("ORDER");
playSound("sound://category_bell/vibrant_cash_register_open_positive_game_open.mp3", false);
}
/*----------------------------------------------------------------------------------------*/
//Calculate Tax which is 6.25% and adds to total 
//TAX in MA is 6.255 on these goods
function tax(){
price_tax = getNumber("order_total");
price_tax_new = (price_tax)+(price_tax/6.25);
setText("order_total_tax", price_tax_new);
}
/*----------------------------------------------------------------------------------------*/
//Calculate Fees which is an additional $15 and adds to total
//This fee is for shoe authenticity check
function fees(){
price_tax_fees = getNumber("order_total_tax");
price_tax_fees = (price_tax_fees + 15);
setText("final_price_text", "$ "+price_tax_fees);
}
/*----------------------------------------------------------------------------------------*/
/* Everything Listed down below here is from Home to Destination and backwards */
//HOME-FEEDBACK
onEvent("buttonFeedback", "click", function( ) {
setScreen("feedback");
playSound("sound://category_app/snap.mp3");  
});
//FEEDBACK-HOME
onEvent("button4", "click", function( ) {
setScreen("HOME");
playSound("sound://category_app/snap.mp3");  
});

//HOME-ABOUT
onEvent("aboutButton", "click", function( ) {
setScreen("aboutPage");
playSound("sound://category_app/snap.mp3");  
});
//ABOUT-HOME
onEvent("button3", "click", function( ) {
setScreen("HOME");
playSound("sound://category_app/snap.mp3");  
});

//HOME-ADIDAS
onEvent("buttonAdidas", "click", function( ) {
setScreen("adidasScreen");
playSound("sound://category_app/snap.mp3");  
});
//ADIDAS-HOME
onEvent("button5", "click", function( ) {
setScreen("HOME");
playSound("sound://category_app/snap.mp3");  
});

//HOME-NIKE
onEvent("buttonNike", "click", function( ) {
setScreen("nikeScreen");
playSound("sound://category_app/snap.mp3");  
});
//NIKE-HOME
onEvent("button7", "click", function( ) {
setScreen("HOME");
playSound("sound://category_app/snap.mp3");  
});

//HOME-JORDAN
onEvent("buttonJordan", "click", function( ) {
setScreen("jordanScreen");
playSound("sound://category_app/snap.mp3");  
});
//JORDAN-HOME
onEvent("button6", "click", function( ) {
setScreen("HOME");
playSound("sound://category_app/snap.mp3");  
});
//ORDER-HOME
onEvent("button1", "click", function( ) {
setScreen("HOME");
playSound("sound://category_app/snap.mp3");  
});
/*----------------------------------------------------------------------------------------*/
