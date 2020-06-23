import './styles.css';
import $ from 'jquery';

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    const numberInput = parseInt($("input#number").val());
    if(inputInvalid(numberInput)){
      $("#answer").text("Number should be between 1 and 3,999.");
      return;
    }
    $("input#number").val("");
    const romanString = createRomanNumeralsString(convertNumbersToRoman(numberInput));
    $("#answer").text(romanString);
    $(".answer").show();
  });
});