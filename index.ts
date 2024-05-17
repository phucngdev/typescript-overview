// #1
type Country = "VN" | "US" | "UK";

function getShippingCost(country: Country): number {
  switch (country) {
    case "VN":
      return 10000;
    case "US":
      return 20000;
    case "UK":
      return 30000;
    default:
      throw new Error("Invalid country");
  }
}

// #2
let tuple: [number, string, boolean] = [42, "Hello", true];
let [number, string, boolean] = [...tuple];

// #3
type Username = string;
type Age = number;
type User = {
  username: Username;
  age: Age;
};

// #4
type Status = "success" | "fail";
function isSuccess(status: string): boolean {
  return status === "success";
}

// #5
let person: [string, number] = ["abc", 1234];

// #6
type Coordinates = [number, number];
let abc: Coordinates = [11.5, -11.5];

// #7
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

// #8
type ItemInfo = [string, number, number];
function priceTotal(item: ItemInfo): number {
  const [name, price, quantity] = item;
  return price * quantity;
}

// #9
type ResponseStatus = {
  status: "success" | "error";
  message: string;
};

// #10
let student: [string, number, number] = ["a", 1, 1];

// #11
type RGBColor = [number, number, number];

// function isValidRGBColor(color: RGBColor): boolean {
//     const [r, g, b] = color;
//     return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
// }

// #12
type Bill = [number, string, number];
function descBill(bill: Bill): string {
  const [billNumber, creationDate, totalAmount] = bill;
  return `hóa đơn ${billNumber} tạo ngày ${creationDate} tổng tiền là ${totalAmount}`;
}

// #1
function parseInput(
  input: string
): number | boolean | string | null | undefined {
  switch (input) {
    case "number":
      return 1;
    case "boolean":
      return true;
    case "string":
      return "string";
    case "null":
      return null;
    case "undefined":
      return undefined;
    default:
      return undefined;
  }
}

// #2
interface Person {
  name: string;
  age: number;
  address: object;
}
function validatePerson(obj: any): boolean {
  if (
    typeof obj === "object" &&
    obj !== null &&
    "name" in obj &&
    typeof obj.name === "string" &&
    "age" in obj &&
    typeof obj.age === "number" &&
    "address" in obj &&
    typeof obj.address === "object"
  ) {
    return true;
  }
  return false;
}

// #3
interface Square {
  shape: "square";
  sideLength: number;
}
interface Circle {
  shape: "circle";
  radius: number;
}
type Geometry = Square | Circle;
function calculateArea(shape: Geometry): number {
  if (shape.shape === "square") {
    const square = shape as Square;
    return square.sideLength ** 2;
  } else if (shape.shape === "circle") {
    const circle = shape as Circle;
    return Math.PI * circle.radius ** 2;
  } else {
    return -1;
  }
}

// #4
function squareNumber(input: number | number[]): number | number[] {
  if (typeof input === "number") {
    return input * input;
  } else if (Array.isArray(input)) {
    return input.map((num) => num ** 2);
  } else {
    return -1;
  }
}

// #5
// Union Types:
// Union Types cho phép một biến hoặc tham số có thể chứa giá trị của nhiều kiểu khác nhau.
// Được ký hiệu bằng cách sử dụng dấu | giữa các kiểu.
// Biến có Union Types có thể chứa giá trị của bất kỳ kiểu nào trong danh sách Union.
// Sử dụng khi một biến có thể chứa nhiều loại giá trị khác nhau.
let numberOrString: number | string;
numberOrString = 10; // Hợp lệ
numberOrString = "Hello"; // Hợp lệ

// Intersection Types:
// Intersection Types kết hợp nhiều kiểu thành một kiểu mới, chứa tất cả các thuộc tính của các kiểu kết hợp.
// Được ký hiệu bằng cách sử dụng dấu & giữa các kiểu.
// Biến có Intersection Types phải chứa tất cả các thuộc tính của các kiểu kết hợp.
// Sử dụng khi bạn muốn kết hợp các loại giá trị để tạo ra một kiểu mới.
interface Circle2 {
  radius: number;
}
interface Color {
  color: string;
}
type ColorCircle = Circle2 & Color;
const testCircle: ColorCircle = {
  radius: 5,
  color: "blue",
};

// #6
function logStringOrArray(input: string | string[]): void {
  if (typeof input === "string") {
    console.log(input);
  } else if (Array.isArray(input)) {
    input.map((a) => console.log(a));
  } else {
    return;
  }
}

// #7
