creator = 'Ahmad Izhar'

loghandler = {
    error: {
        status: false,
        code: 503,
        message: '[!] Service Unavaible, Sedang dalam perbaikan',
        maintanied_by: `${creator}`
    },
    noturl: {
    	status: false,
    	code: 403,
    	message: '[!] Forbiden or Error, Invlid url',
    	maintanied_by: `${creator}`
    },
    notfound: {
    	status: false,
    	code: 404,
    	message: '[!] Forbiden or Error, Not Found',
    	maintanied_by: `${creator}`
    },
    notid: {
    	status: false,
    	code: 404,
    	message: '[!] Forbiden or Error, Invalid Id or Zone',
    	maintanied_by: `${creator}`
    },
    redy: {
    	status: false,
    	code: 403,
    	message: '[!] Forbiden or Error, Alias ​​already in use',
    	maintanied_by: `${creator}`
    },
    emoji: {
	status: false,
	code: 403,
	message: '[!] Forbiden or Error, Emoji not Found',
	maintanied_by: `${creator}`
}

}
