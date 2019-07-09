Date.prototype.yyyymmdd = function() {
	var mm = this.getMonth() + 1; // getMonth() is zero-based
	var dd = this.getDate();
	var hh = this.getHours();
	var mn = this.getMinutes();
	var ss = this.getSeconds();
	var ms = this.getMilliseconds();
	var rd = Math.floor(Math.random() * 9);
	var rs = Math.floor(Math.random() * 9);
	return [this.getFullYear(), mm, dd, hh, mn, ss, ms, rd, rs].join('');
};
const timeStamp = new Date();

export const getTimeStamp = () => timeStamp.yyyymmdd();
