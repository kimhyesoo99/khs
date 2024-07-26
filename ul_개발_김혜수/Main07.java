// 연산자 (3.복합대입 연산자)
public class Main07 {
	
	public static void main(String[] args ) {
		
		int value = 2 ;
		
		value += 3 ;
		System.out.println("value = " + value);
		
		
		value -= 2 ;
		System.out.println("value = " + value);
		
		value *= 3 ;
		System.out.println("value = " + value);
		
		value /= 2 ;
		System.out.println("value = " + value);
		
		value %= 2 ;
		System.out.println("value = " + value);
		
		
		
		value -= 2 + 3;  // 복합대입 연산의 경우 우변의 중복되는 변수를 없애고 연산자를 대입 연산자 앞에
						// -표기함으로써 부화와 구분하기 위한 추악된 문법. 문법상 우변에 실제 변수가 -
						// 존재하는 것이 ㅇㅏ니므로 우변의 연산(2+3) 이 선 처리되고 좌변에 연산하여 -
						// 다시 좌변에 대입하는 형태 결과적으로 "value = value -(2+3)"dml -
						// 형태로 처리 이를 잘못 이해하여 단순한 변환을 적용
						// -"value = value - 2 + 3의 " 형태로 이해하는 오류의 주의.
		
		System.out.println("value = " + value); 

		

		
		
		
		
	
	}

}
