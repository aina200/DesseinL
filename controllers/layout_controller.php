<?php

declare(strict_types=1);

	
	if (isset($_COOKIE['accept_cookie'])) {

    	$showcookie = false;
	}
	else
	{
    	$showcookie = true;
	}		

require './views/layout.phtml';