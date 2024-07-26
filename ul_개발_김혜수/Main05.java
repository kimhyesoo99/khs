// 연산자 (1.산술 연산자)

public class Main05 {

	public static void main(String[] args) {
		
		int a = 6 , b= 4;
		double c = 4;
		
		System.out.println(a + "+" + b + "=" + (a + b) );
		System.out.println(a + "-" + b + "=" + (a - b) );
		System.out.println(a + "*" + b + "=" + a * b );
		System.out.println(a + "/" + b + "=" + a / b );  // 동일 타입끼리의 연산 결과는 타입 유지.
		
		
		
		System.out.println(a + "/" + c + "=" + a / c );    // 상대적으로 작은 데이터 타입과 큰 데이터 타입끼리의 
														   // -연산은 호환이 되는 큰 경우 큰 데이터 타입으로 확장.
	}

}
