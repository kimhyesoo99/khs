import java.util.Scanner;

public class type01 {
	public static void main(String[] args) {
	
		int num = 5;				// 변수를 선언(가비지값) 후 초기화(덮어쓰기)
		num = num + 5;				
		
		System.out.println(num);	// 10
		
		// -------------------------------------------------------------------
		
		//int num1;
		// num1 = num1 + 5;			에러발생 ( 초기화하지 않고 사용 불가 )
		//System.out.println(num1);
		
		// -------------------------------------------------------------------
		
		int num2 = 5;
		int num3;
		
		num3 = num2 + 5;			// 변수를 사용하지않으면 초기화 필요 X(num3)
				
		System.out.println(num3);
		
		
		int num4;
		
		num4 = num3 + 5;			// 근데 위에서 덮어쓰기(num3 = num2 + 5;) 해주니 사용은 가능하네
									// 가비지 값만 아니면 되나보다, 저게 초기화가 된건가?
		System.out.println(num4);
		
		
		// 대문자로 시작하는 것은 class(사용자정의타입/참조형)   ex) Scanner
		int numSc;
		
		Scanner sc = new Scanner(System.in); 	//new 키워드로 자동완성 , import도 자동입력됨 // System.in << 콘솔에서 입력을 받을 수 있는 객체
		System.out.print("정수를 입력하세요 : ");
		
		numSc = sc.nextInt();
		
		System.out.printf("\n입력된 값은 %d 입니다.", numSc);
		
		sc.close();				// 메모리 관리를 위해 스캐너 이벤트 종료
		
		
	}
}

