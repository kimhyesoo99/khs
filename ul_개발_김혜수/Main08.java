 // 증강 연산자

		// <증강 연산자와 일반 카운터 식, 복합대입 연산자 비교>
		// 증강 연산자의 경우, 일반 카운터 식이나 복합대입 연산자와 달리 1씩만 증감 가능
		
		
		// a++ == a = a + 1 == a+=1
		// a-- != a = a - 2 == a-=2 




public class Main08 {

	public static void main(String[] args) {
		
		int value = 2;
		int a = ++value;
		System.out.println("value = " + value + ", a = " + a);  //전위 : 선 증가 후 리턴
		
		a = value++;
		System.out.println("value = " + value + ", a = " + a);   // 후위 : 리턴 후 증가 
		
		a = --value;
		System.out.println("value = " + value + ", a = " + a);    // 전위 : 선 감소 후 리턴
		
		a = value--;
		System.out.println("value = " + value + ", a = " + a);    // 후위 : 리턴 후 감소

	}

}
