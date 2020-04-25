<?php
        function confrontaLevel($level) {
            if ($level == 'guest') {
                return 3;
            } elseif ($level == 'employee') {
                return 2;
            } elseif ($level == 'clevel') {
                return 1;
            }
        }
?>
