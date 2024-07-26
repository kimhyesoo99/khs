// 상수 지정자 (final)


public class Main02 {

	public static void main(String[] args) {
		
		double varpI = 3.14;  
		final double PI = 3.14;  //final : 변수에 대한 상수화 선언. final 지정 시 당행과 같이
								// -선언과 동시에 바로초기화해야 함이 원칙이며 이후 7행과 같이 값 변경
								// -불가. final 지정 시 관례상 대문자로 표기.
		
		
		varpI = 3.141592;
		// PI=3.141592;
		
		System.out.println(varpI);
		System.out.println(PI);
		
		final int DOUBEL_SIZE;    // 메서드 내의 지역 변수에 대한 초기화의 경우에는 선언 후 최초에 한하여
									//-14행과 같이 초기화 가능, 최초 이후의 값 변경은 15행과 같이 불가
		  							// -단, 차후 학습할 클래스 내의 멤버 필드에 대한 final을 지정한
									// -경우에는 12행과 같이 선언 시 초기화를 하지 않으면 바로 에러 처리.
		
		
		DOUBEL_SIZE=8;
		
		//DOUBEL_SIZE=4;
		
	}

}
