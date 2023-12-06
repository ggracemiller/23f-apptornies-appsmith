export default {
	myVar1: [],
	myVar2: {},
	navigateOnSelect () {
		console.log(Select1.selectedOptionValue)
		if (Select1.selectedOptionValue === "Lawyer") {
			navigateTo('LawyerChooseName', {}, 'SAME_WINDOW');
		}
		else if (Select1.selectedOptionValue === "Client") {
			navigateTo('Client_Information', {}, 'SAME_WINDOW');
		}
		else if (Select1.selectedOptionValue === "Partner") {
			navigateTo('Full access to firm', {}, 'SAME_WINDOW');
		}
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}