import java.util.Scanner;

//예제 

public class Main{
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		int num1;
		int num2;
		int num3;
		int num4;
		
		
		System.out.println("학번과 점수를 입력하시오.");
		
		System.out.print("\n양아치 학번 : ");
		num1 = scanner.nextInt();
		
		System.out.print("\n양아치 점수 : ");
		num2 = scanner.nextInt();
		
		
		System.out.print("\n날라리 학번 : ");
		num3 = scanner.nextInt();
		
		System.out.print("\n날라리 점수 : ");
		num4 = scanner.nextInt();
		
		System.out.printf("\n양아치 학번은 %03d, 점수는 %d 입니다.",num1,num2);		
		System.out.printf("\n날라리 학번은 %03d, 점수는 %d 입니다.",num3,num4);		
		
		scanner.close();
		
		
	}
}