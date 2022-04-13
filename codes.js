
// Ans-1

let k = 2;


function multiply(A,B)
{
	
	let C = new Array(k + 1);
	for(let i=0;i<k+1;i++)
	{
		C[i]=new Array(k+1);
		for(let j=0;j<k+1;j++)
		{
			C[i][j]=0;
		}
	}
	
	for(let i = 1; i <= k; i++)
	{
		for(let j = 1; j <= k; j++)
		{
			for(let x = 1; x <= k; x++)
			{
				C[i][j] = (C[i][j] + (A[i][x] * B[x][j]));
			}
		}
	}
	return C;
}


function pow(t,n)
{
	
	if (n == 1)
	{
		return t;
	}
	
	
	if ((n & 1) != 0)
	{
		return multiply(t, pow(t, n - 1));
	}
	else
	{
		let X = pow(t, n / 2);
		return multiply(X, X);
	}
}

function compute(n)
{
	
	if (n == 0) return 1;
	if (n == 1) return 1;
	

	let f1=new Array(k + 1);
	f1[1] = 2;
	f1[2] = 7;
	
	
	let t = new Array(k + 1);
	for(let i=0;i<k+1;i++)
	{
		t[i]=new Array(k+1);
		for(let j=0;j<k+1;j++)
		{
			t[i][j]=0;
		}
	}
	
	for(let i = 1; i <= k; i++)
	{
		for(let j = 1; j <= k; j++)
		{
			if (i < k)
			{
				
				
				if (j == i + 1)
				{
					t[i][j] = 1;
				}
				else
				{
					t[i][j] = 0;
				}
				continue;
			}
			
			
			t[i][j] = 1;
		}
	}
	
	
	t = pow(t, n - 1);
	let sum = 0;
	
	
	for(let i = 1; i <= k; i++)
	{
		sum += t[1][i] * f1[i];
	}
	return sum;
}



n = 5;
document.write(compute(n)+"<br>");
n = 10;
document.write(compute(n)+"<br>");




// Ans2.



