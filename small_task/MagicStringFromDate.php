<?php

// До
function makeMagicStringFromDate() {
    $dateTime = new DateTime("-0500-01-28T16:22:37-07:00", new DateTimeZone("GMT"));
    $str = $dateTime->format("YmdHis");
    
    for ($i = 0; $i < strlen($str); $i++) {
        if (ctype_digit($str[$i])) {
            if ($str[$i] == 0) {
                $str[$i] = 'a';
            } else {
                $str[$i] = 10 - $str[$i];
            }
        }    
    }
    return $str; 
}


// После
function mineMagicStringFromDate() {
    // При использовании DateTime::createFromFormat возвращается False. Пока не понял в чём проблема
    $dateTime = new DateTime("-0500-01-28T16:22:37-07:00", new DateTimeZone("GMT"));
    $str = $dateTime->format("YmdHis");
    // если формат даты не будет изменяться и год будет больше 0000, то 28 и 30 строчку можно убрать 
    for ($i = 0; $i < strlen($str); $i++) {
        if (ctype_digit($str[$i])) {
            $str[$i] = $str[$i] == 0 ? 'a' : 10 - $str[$i];
        }
    }
    return $str;
}
echo "main\n" . makeMagicStringFromDate() . "\n";
echo "test\n" . mineMagicStringFromDate() . "\n";
