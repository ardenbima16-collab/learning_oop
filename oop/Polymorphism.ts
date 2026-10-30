class shape {
    draw(): void {
        console.log("menggambae bentuk  umum...");
        
    }
}

class sircel extends shape {
    draw(): void {
        console.log("menggambar bentuk lingkaran");
        
    }
}

class square extends shape {
    draw(): void {
        console.log("menggambae bentuk persegi");
        
    }
}

const shapes : shape[] = [new shape(), new sircel(), new square()]

shapes.forEach (shapes => {
    shapes.draw();
    
});