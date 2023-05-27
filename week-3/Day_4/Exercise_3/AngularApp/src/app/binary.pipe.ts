import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "binary",
})
export class BinaryPipe implements PipeTransform {
    transform(value: number, ...args: any[]) {
        if (args[0] === "hexadecimal") {
            return value.toString(16);
        } else if (args[0] === "octal") {
            return value.toString(8);
        }
        return value.toString(2);
    }
} 