// 주석 : 1) 도움말 2) 코드 테스트
// eclipse 단축키
// 한줄 주석		: ctrl + /
// 실	행		: ctrl + F11
// 디 버 깅		: F11
// 자동 완성		: ctrl + space
// 화면 확대/축소	: ctrl + (+ / -)
// 줄 단위 복사	: ctrl + alt + (Up / Down)
// 줄 단위 이동	: alt + (Up / Down)
// 한줄 삭제		: ctrl + D
// 아래 빈줄 삽입	: shift + Enter
// 위 빈줄 삽입	: ctrl + shift + Enter
// 들여쓰기		: tab
// 내어쓰기		: shift + tab
// 코드 자동완성	: ctrl + shift + F
// sysout		: 출력 예약어(System.out.println();)


public class Main01{
	public static void main(String[] args) {		//프로그램 시작
		/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
		 *	< Java의 기본 자료표현 형식 > 												 *
		 *																			 *	
		 *  숫자		-	123															 *
		 *  문자		-	'a'															 *
		 *  문자열	-	"abc"														 *
		 *  																		 *
		 *  abcd	-	문자열이 아님(큰따옴표X)											 *
		 * 	=> "abcd"																 *
		 *  																		 *
		 *  'ab'	-	문자 또는 문자열이 아님(문자는 한글자만 사용가능 '', 문자열은 "" 로 구분)		 *
		 *  => "ab"(문자열) 또는 'a', 'b'(문자)로 작성										 *
		 *  																		 *
		 *  12ab	- 	문자열로 표기 가능(숫자표기는 연산이 가능한지 기준)						 *
		 *  => "12ab"																 *
		 * 																			 *
		 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
		
		System.out.print(1+"\n");  // "\n" 줄 바꿈 특수문자
		System.out.println(12);
		System.out.printf("%d\n",123);  // printf는 지시자 형식에 맞춰 대입?
		// %d(decimal) : 정수형 지시자
		
		
		System.out.printf("==%d==\n",1234);		// 데이터를 그대로 출력
		System.out.printf("==%10d==\n",1234);	// #만큼 데이터 공간생성, 빈 공간은 공백으로 채움(우측정렬)
		System.out.printf("==%-10d==\n",1234);	// #만큼 데이터 공간생성, 빈 공간은 공백으로 채움(좌측정렬)
		System.out.printf("==%010d==\n",1234);	// 0# 만큼 데이터 공간생성, 빈 공간은 0으로 채움(우측정렬) ※좌측정렬은 데이터 값이 변하기때문에 허용하지않음.
		
		
	} 												//프로그램 종료(main 메서드 종료)
}