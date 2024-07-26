// 문자형과 문자열
public class Main04 {

	public static void main(String[] args) {
		
		
		char ch='A' ;    // char : 문자형 타입으로 2byte. 4byte인 int와 호환.
		// char st[]="abcd" ;    // 문자열은 c와 달리 배열에 저장 불가
		
		
		int c=5;  // 타입명 변수명 [ = 초기값]
		
		String str="저기 보이는\n" + "하늘 아래서\"너와\" 손잡고-"+c+"회\n";
		 // String : 문자열 저장 클래스.
		 // -'+' 연산자를 통해 문자열이나 변수 연결 가능 
		
		
		System.out.println(str + ch + ch + "클라스\n" + str);
				

	}

}
