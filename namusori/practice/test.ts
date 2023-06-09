class TestClass {

	constructor(
		private id: number,
		private name: string,
	) {}

	printInfo(): void {
		console.log(`당신( ${this.name} )의 고유 번호는 ${this.id} 입니다. `)
	}
}

export default TestClass;