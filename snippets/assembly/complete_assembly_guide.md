# Complete Assembly x86-64 Programming Guide

## Table of Contents

1. [Introduction](#introduction)
2. [Basic Concepts](#basic-concepts)
3. [Data Types and Memory](#data-types-and-memory)
4. [Arithmetic and Logic Operations](#arithmetic-and-logic-operations)
5. [Registers and Addressing](#registers-and-addressing)
6. [Control Flow](#control-flow)
7. [Functions and Procedures](#functions-and-procedures)
8. [System Programming](#system-programming)
9. [Advanced Topics](#advanced-topics)
10. [Performance and Optimization](#performance-and-optimization)
11. [Development and Debugging](#development-and-debugging)
12. [Specialized Programming](#specialized-programming)
13. [Real-World Applications](#real-world-applications)

---

## Introduction

Assembly language is the lowest-level programming language that still uses human-readable mnemonics. In x86-64 assembly, you directly control the processor's registers, memory, and execution flow. This guide explains every concept from basic data manipulation to advanced system programming.

### Why Learn Assembly?

- **Performance**: Direct hardware control for maximum efficiency
- **Understanding**: Deep comprehension of how computers work
- **System Programming**: Operating systems, drivers, embedded systems
- **Security**: Reverse engineering, exploit development, malware analysis
- **Optimization**: Critical code paths in high-performance applications

---

## Basic Concepts

### Program Structure

Every Assembly program consists of sections that define different types of data and code:

**`.data` Section**: Contains initialized data
- Variables with initial values
- Strings, numbers, arrays
- Read-write data

**`.bss` Section**: Contains uninitialized data
- Variables without initial values
- Allocated but not initialized memory
- More memory-efficient than `.data`

**`.text` Section**: Contains executable code
- Program instructions
- Function definitions
- Entry point (`_start`)

**`.rodata` Section**: Contains read-only data
- Constants that shouldn't be modified
- String literals
- Lookup tables

### Comments and Documentation

Assembly supports two comment styles:
- **Line comments**: `;` - Everything after semicolon is ignored
- **Inline comments**: Can appear at end of instruction lines

Good commenting is crucial in Assembly because the code can be cryptic. Document:
- What each section does
- Register usage patterns
- Algorithm explanations
- Memory layout assumptions

---

## Data Types and Memory

### Integer Data Types

Assembly provides several integer sizes:

- **`db` (byte)**: 8 bits (0-255 unsigned, -128 to 127 signed)
- **`dw` (word)**: 16 bits (0-65535 unsigned, -32768 to 32767 signed)
- **`dd` (double word)**: 32 bits
- **`dq` (quad word)**: 64 bits

Why different sizes matter:
- **Memory efficiency**: Use smallest size that fits your data
- **Performance**: Processor optimized for native word size (64-bit)
- **Compatibility**: Interfacing with different data formats

### Floating-Point Data Types

- **`dd`**: 32-bit single precision (IEEE 754)
- **`dq`**: 64-bit double precision (IEEE 754)

Floating-point requires special registers (XMM) and instructions (SSE/AVX).

### Strings

Strings in Assembly are byte arrays:
- **Null-terminated**: End with 0 byte (C-style)
- **Length-prefixed**: Store length separately
- **Fixed-length**: Padded to specific size

String operations require manual implementation of:
- Length calculation
- Copying and comparison
- Case conversion
- Searching and replacement

### Arrays

Arrays are contiguous memory blocks:
- **Element access**: `base_address + (index * element_size)`
- **Bounds checking**: Manual - Assembly doesn't check bounds
- **Multi-dimensional**: Calculate offsets manually

### Data Alignment

Modern processors prefer aligned data:

**Why alignment matters**:
- **Performance**: Aligned data loads faster
- **Cache efficiency**: Reduces cache line splits
- **SIMD requirements**: Vector instructions need aligned data

**Alignment rules**:
- 1-byte data: No alignment needed
- 2-byte data: Align to 2-byte boundaries
- 4-byte data: Align to 4-byte boundaries
- 8-byte data: Align to 8-byte boundaries
- SIMD data: Often requires 16-byte or 32-byte alignment

### Endianness

x86-64 uses little-endian byte ordering:
- **Least significant byte** stored at lowest address
- **Most significant byte** stored at highest address

Example: 0x12345678 stored as: 78 56 34 12

This affects:
- Multi-byte integer interpretation
- Network protocol implementation
- File format parsing
- Cross-platform data exchange

---

## Arithmetic and Logic Operations

### Basic Arithmetic

**Addition and Subtraction**:
- `add dest, src`: dest = dest + src
- `sub dest, src`: dest = dest - src
- `inc dest`: dest = dest + 1 (faster than add)
- `dec dest`: dest = dest - 1 (faster than sub)

**Why increment/decrement matter**:
- Single-byte instructions (smaller code)
- Faster execution on some processors
- Don't affect carry flag the same way

### Multiplication and Division

**Multiplication**:
- `mul src`: RAX = RAX * src (unsigned)
- `imul dest, src`: dest = dest * src (signed)

**Division**:
- `div src`: RAX = RDX:RAX / src, RDX = remainder (unsigned)
- `idiv src`: Same but signed

**Division preparation**:
- Clear RDX for unsigned: `xor rdx, rdx`
- Sign-extend for signed: `cqo` (extends RAX into RDX:RAX)

**Why division is complex**:
- Uses two registers for dividend (RDX:RAX)
- Produces quotient and remainder simultaneously
- Can cause exceptions (divide by zero)
- Significantly slower than other operations

### Bitwise Operations

**Basic bitwise**:
- `and dest, src`: Bitwise AND
- `or dest, src`: Bitwise OR
- `xor dest, src`: Bitwise XOR
- `not dest`: Bitwise NOT (one's complement)

**Common patterns**:
- `xor rax, rax`: Clear register (faster than `mov rax, 0`)
- `and rax, 0xFF`: Extract lowest byte
- `or rax, rax`: Test if register is zero

### Bit Shifts

**Logical shifts**:
- `shl dest, count`: Shift left (multiply by 2^count)
- `shr dest, count`: Shift right (divide by 2^count, unsigned)

**Arithmetic shifts**:
- `sal dest, count`: Same as SHL
- `sar dest, count`: Shift right preserving sign bit

**Why use shifts**:
- Multiplication/division by powers of 2
- Bit field manipulation
- Fast constant multiplication
- Extracting bit ranges

---

## Registers and Addressing

### Register Types

**General-Purpose Registers (64-bit)**:
- **RAX**: Accumulator, return values, arithmetic
- **RBX**: Base register, often used for memory addressing
- **RCX**: Counter register, loop counters, string operations
- **RDX**: Data register, I/O operations, multiplication/division
- **RSI**: Source index, string/array operations
- **RDI**: Destination index, string/array operations
- **RBP**: Base pointer, stack frame base
- **RSP**: Stack pointer, always points to top of stack
- **R8-R15**: Additional general-purpose registers

**Register Sizing**:
- 64-bit: RAX, RBX, etc.
- 32-bit: EAX, EBX, etc. (automatically zeros upper 32 bits)
- 16-bit: AX, BX, etc.
- 8-bit: AL/AH, BL/BH, etc.

### Addressing Modes

**Immediate Addressing**:
```asm
mov rax, 42        ; Load constant value
```

**Register Addressing**:
```asm
mov rax, rbx       ; Copy register content
```

**Memory Addressing**:
```asm
mov rax, [rbx]     ; Load from memory address in RBX
```

**Indexed Addressing**:
```asm
mov rax, [rbx + 8]                ; Base + displacement
mov rax, [rbx + rcx]              ; Base + index
mov rax, [rbx + rcx * 4]          ; Base + index * scale
mov rax, [rbx + rcx * 4 + 8]      ; Base + index * scale + displacement
```

**RIP-Relative Addressing**:
```asm
mov rax, [rel data]  ; Load relative to instruction pointer
```

**Why different addressing modes**:
- **Immediate**: Constants, opcodes
- **Register**: Fast register-to-register operations
- **Memory**: Variable access
- **Indexed**: Array element access
- **RIP-relative**: Position-independent code

---

## Control Flow

### Unconditional Jumps

**`jmp label`**: Always jump to label

Used for:
- Implementing loops
- Skipping code sections
- Function epilogues
- Switch statement implementations

### Conditional Jumps

Based on flags set by previous operations:

**Equality**:
- `je`/`jz`: Jump if equal/zero
- `jne`/`jnz`: Jump if not equal/not zero

**Signed comparisons**:
- `jl`: Jump if less
- `jle`: Jump if less or equal
- `jg`: Jump if greater
- `jge`: Jump if greater or equal

**Unsigned comparisons**:
- `jb`: Jump if below
- `jbe`: Jump if below or equal
- `ja`: Jump if above
- `jae`: Jump if above or equal

### Flags Register

The flags register contains condition codes:
- **Zero Flag (ZF)**: Set when result is zero
- **Sign Flag (SF)**: Set when result is negative
- **Carry Flag (CF)**: Set on unsigned overflow
- **Overflow Flag (OF)**: Set on signed overflow

### Comparison Operations

**`cmp operand1, operand2`**: Subtracts operand2 from operand1 but only sets flags

**`test operand1, operand2`**: Performs bitwise AND but only sets flags

**Common patterns**:
```asm
test rax, rax      ; Check if RAX is zero
cmp rax, 10        ; Compare RAX with 10
```

### Loop Implementations

**Simple loop**:
```asm
mov rcx, 10        ; Counter
loop_start:
    ; Loop body
    dec rcx
    jnz loop_start
```

**For-loop equivalent**:
```asm
mov rsi, array     ; Initialize pointer
mov rcx, length    ; Initialize counter
for_loop:
    ; Process [rsi]
    add rsi, 8     ; Next element
    dec rcx
    jnz for_loop
```

### Switch-Case Implementation

Using jump tables for efficient multi-way branches:
```asm
cmp rax, max_case
ja default_case
jmp [jump_table + rax * 8]
```

Benefits:
- O(1) time complexity
- Efficient for dense case values
- Better than cascaded if-else chains

---

## Functions and Procedures

### Function Basics

**Function definition**:
```asm
function_name:
    ; Function body
    ret            ; Return to caller
```

**Function call**:
```asm
call function_name ; Push return address and jump
```

### Calling Conventions

**System V AMD64 ABI (Linux/Unix)**:
- **Integer arguments**: RDI, RSI, RDX, RCX, R8, R9
- **Return value**: RAX
- **Caller-saved**: RAX, RCX, RDX, RSI, RDI, R8-R11
- **Callee-saved**: RBX, RBP, R12-R15

**Why calling conventions matter**:
- **Interoperability**: Must match when calling C functions
- **Register preservation**: Ensures registers maintain values across calls
- **Stack alignment**: Required for proper operation
- **Performance**: Efficient parameter passing

### Stack Operations

**Stack grows downward** (from high to low addresses):
- `push src`: Decrements RSP, stores value
- `pop dest`: Loads value, increments RSP

**Stack frame structure**:
```
Higher addresses
+------------------+
| Return address   | <- Pushed by CALL
+------------------+
| Previous RBP     | <- Pushed by function prologue
+------------------+ <- RBP points here
| Local variables  |
+------------------+
| ...              |
+------------------+ <- RSP points here
Lower addresses
```

### Function Prologue and Epilogue

**Standard prologue**:
```asm
push rbp           ; Save old frame pointer
mov rbp, rsp       ; Set new frame pointer
sub rsp, N         ; Allocate N bytes for locals
```

**Standard epilogue**:
```asm
add rsp, N         ; Deallocate locals (or: mov rsp, rbp)
pop rbp            ; Restore old frame pointer
ret                ; Return to caller
```

### Parameter Passing

**Register parameters** (first 6 integers):
```asm
; Calling: my_func(10, 20, 30)
mov rdi, 10
mov rsi, 20
mov rdx, 30
call my_func
```

**Stack parameters** (7th and beyond):
```asm
push arg8          ; 8th argument
push arg7          ; 7th argument
call my_func
add rsp, 16        ; Clean up stack (2 args * 8 bytes)
```

### Local Variables

**Stack-based locals**:
```asm
; Allocate 16 bytes for locals
sub rsp, 16
mov [rbp - 8], rax    ; First local variable
mov [rbp - 16], rbx   ; Second local variable
```

### Function Pointers

**Jump tables**:
```asm
function_table dq func1, func2, func3
; Call function by index
mov rax, [function_table + index * 8]
call rax
```

### Recursion

**Recursive function requirements**:
- **Base case**: Condition to stop recursion
- **Stack management**: Each call gets own stack frame
- **Parameter handling**: Pass parameters correctly
- **Return value**: Propagate results back up

**Stack depth considerations**:
- Each recursive call uses stack space
- Deep recursion can cause stack overflow
- Tail recursion optimization possible

### Variadic Functions

**Handling variable arguments**:
- Use register save area for register parameters
- Additional arguments on stack
- Requires careful parameter counting
- Complex calling convention compliance

---

## System Programming

### Linux System Calls

**System call mechanism**:
- Load system call number into RAX
- Load arguments into registers (RDI, RSI, RDX, R10, R8, R9)
- Execute `syscall` instruction
- Result returned in RAX

**Common system calls**:
- **sys_write (1)**: Write to file descriptor
- **sys_read (0)**: Read from file descriptor
- **sys_open (2)**: Open file
- **sys_close (3)**: Close file descriptor
- **sys_exit (60)**: Terminate process

### File Operations

**Opening files**:
```asm
mov rax, 2         ; sys_open
mov rdi, filename  ; Path
mov rsi, flags     ; O_RDONLY, O_WRONLY, etc.
mov rdx, mode      ; Permissions (0644, etc.)
syscall
```

**File operation flags**:
- **O_RDONLY (0)**: Read only
- **O_WRONLY (1)**: Write only
- **O_RDWR (2)**: Read/write
- **O_CREAT (64)**: Create if doesn't exist
- **O_TRUNC (512)**: Truncate to zero length

### Memory Management

**Dynamic memory allocation**:
- **brk/sbrk**: Adjust program break (heap end)
- **mmap**: Map files or anonymous memory
- **munmap**: Unmap memory regions

**Memory mapping benefits**:
- **File I/O**: Map files directly into memory
- **Shared memory**: Inter-process communication
- **Anonymous mapping**: Large memory allocations
- **Performance**: Kernel handles paging

### Process Control

**Process creation**:
- **fork()**: Create child process (copy of parent)
- **exec()**: Replace process image
- **wait()**: Wait for child completion

**Process communication**:
- **Pipes**: Unidirectional data flow
- **Signals**: Asynchronous notifications
- **Shared memory**: Direct memory sharing
- **Message queues**: Structured message passing

### Signal Handling

**Signal types**:
- **SIGINT (2)**: Interrupt (Ctrl+C)
- **SIGTERM (15)**: Termination request
- **SIGKILL (9)**: Force kill (uncatchable)
- **SIGSEGV (11)**: Segmentation violation

**Signal handling setup**:
```asm
mov rax, 13        ; sys_rt_sigaction
mov rdi, signal_num
mov rsi, sigaction_struct
syscall
```

### Environment Variables

**Environment access**:
- Available through auxiliary vector
- Third parameter to main() in C
- Accessed via system calls or startup code

**Common environment variables**:
- **PATH**: Executable search path
- **HOME**: User home directory
- **SHELL**: Default shell
- **USER**: Username

---

## Advanced Topics

### Memory Models

**Virtual memory concepts**:
- **Virtual address space**: Process sees contiguous memory
- **Physical memory**: Actual RAM locations
- **Page tables**: Map virtual to physical addresses
- **Memory protection**: Read/write/execute permissions

**Memory layout**:
```
High addresses (0x7FFFFFFFFFFF)
+------------------+
| Stack            | (grows down)
+------------------+
| Memory mapping   |
+------------------+
| Heap             | (grows up)
+------------------+
| BSS              | (uninitialized data)
+------------------+
| Data             | (initialized data)
+------------------+
| Text             | (code)
+------------------+
Low addresses (0x400000)
```

### Security Features

**Stack protection**:
- **Stack canaries**: Detect buffer overflows
- **ASLR**: Address Space Layout Randomization
- **NX bit**: Non-executable stack/heap
- **Stack guards**: Prevent stack smashing

**Position-Independent Code (PIC)**:
- Code that works regardless of load address
- Required for shared libraries
- Uses RIP-relative addressing
- Enables ASLR effectiveness

### Dynamic Linking

**Global Offset Table (GOT)**:
- Contains addresses of global variables
- Updated by dynamic linker at load time

**Procedure Linkage Table (PLT)**:
- Stubs for external functions
- Implements lazy binding
- First call resolves address

### Macros and Preprocessing

**NASM macro system**:
```asm
%macro print_string 2
    mov rax, 1
    mov rdi, 1
    mov rsi, %1
    mov rdx, %2
    syscall
%endmacro
```

**Conditional assembly**:
```asm
%ifdef DEBUG
    ; Debug code
%endif
```

### Optimization Techniques

**Code optimization strategies**:
- **Register allocation**: Keep frequently used data in registers
- **Loop unrolling**: Reduce loop overhead
- **Instruction scheduling**: Avoid pipeline stalls
- **Branch prediction**: Make branches predictable

---

## Performance and Optimization

### Cache Optimization

**Cache hierarchy**:
- **L1 Cache**: Fastest, smallest (32KB typical)
- **L2 Cache**: Medium speed/size (256KB typical)
- **L3 Cache**: Slower, larger (8MB typical)
- **Main memory**: Slowest, largest

**Cache-friendly patterns**:
- **Sequential access**: Exploit cache line fetching
- **Temporal locality**: Reuse recently accessed data
- **Spatial locality**: Access nearby memory locations
- **Data structure layout**: Arrange for cache efficiency

### SIMD Instructions

**Single Instruction, Multiple Data**:
- Process multiple values simultaneously
- SSE: 128-bit registers (4 floats, 2 doubles)
- AVX: 256-bit registers (8 floats, 4 doubles)
- AVX-512: 512-bit registers (16 floats, 8 doubles)

**SIMD benefits**:
- **Parallelism**: Multiple operations per instruction
- **Bandwidth**: Better memory utilization
- **Performance**: Significant speedup for suitable algorithms

### Branch Prediction

**How branch prediction works**:
- Processor predicts which way branches will go
- Continues executing predicted path
- Flushes pipeline if prediction wrong

**Optimization strategies**:
- **Predictable patterns**: Make branches consistent
- **Branch elimination**: Use conditional moves
- **Loop structure**: Arrange for predictable exits

### Profiling and Measurement

**Performance counters**:
- **RDTSC**: Read time stamp counter
- **RDPMC**: Read performance monitoring counter
- **Hardware counters**: Cache misses, branch mispredictions

**Profiling tools**:
- **perf**: Linux performance analysis
- **gprof**: GNU profiler
- **Valgrind**: Memory and performance analysis

---

## Development and Debugging

### Debugging Techniques

**GDB with Assembly**:
- Set breakpoints: `break function_name`
- Single step: `stepi` (step instruction)
- Examine registers: `info registers`
- Examine memory: `x/10x $rsp`

**Debug information**:
- Compile with `-g` flag
- DWARF debug format
- Source-level debugging possible

### Assembly with C Integration

**Calling Assembly from C**:
```c
extern long asm_function(long a, long b);
```

**Calling C from Assembly**:
```asm
extern printf
call printf
```

**Linking considerations**:
- Match calling conventions
- Handle name mangling
- Preserve stack alignment
- Manage register usage

### Build Systems

**Makefile for Assembly**:
```makefile
NASM = nasm
LD = ld
NASMFLAGS = -f elf64 -g
LDFLAGS = 

%.o: %.asm
	$(NASM) $(NASMFLAGS) -o $@ $<

program: main.o utils.o
	$(LD) $(LDFLAGS) -o $@ $^
```

**Multi-file projects**:
- Separate concerns into different files
- Use extern/global for symbol sharing
- Link object files together
- Create static libraries if needed

---

## Specialized Programming

### Coroutines

**Cooperative multitasking**:
- Functions voluntarily yield control
- Maintain execution state between calls
- Lighter weight than threads

**Implementation strategy**:
- Save/restore register state
- Switch stack pointers
- Maintain coroutine control blocks

### State Machines

**Finite State Machine implementation**:
- State variable tracks current state
- Jump table for state handlers
- Event-driven transitions

**Benefits**:
- Clear program flow
- Easy to understand and modify
- Efficient implementation
- Good for protocol parsing

### Atomic Operations

**Lock-free programming**:
- Operations that complete without interruption
- Compare-and-swap primitives
- Memory ordering guarantees

**Common atomic operations**:
- **LOCK prefix**: Make operation atomic
- **CMPXCHG**: Compare and exchange
- **XADD**: Exchange and add

### Hash Tables

**Implementation components**:
- Hash function for key distribution
- Collision resolution strategy
- Dynamic resizing capability
- Load factor management

### Memory Allocators

**Custom allocation strategies**:
- **Fixed-size blocks**: Fast allocation/deallocation
- **Variable-size blocks**: Memory efficient
- **Pool allocators**: Reduce fragmentation
- **Stack allocators**: LIFO allocation

### Context Switching

**Task switching components**:
- Save current task state
- Select next task to run
- Restore next task state
- Update scheduler data structures

### Real-Time Programming

**Real-time constraints**:
- **Hard real-time**: Deadlines must be met
- **Soft real-time**: Prefer to meet deadlines
- **Deterministic timing**: Predictable execution times

**Real-time techniques**:
- Priority-based scheduling
- Interrupt handling optimization
- Memory pre-allocation
- Cache warming strategies

---

## Real-World Applications

### Complete Applications

**Menu-driven programs**:
- User interface implementation
- Input validation and parsing
- State management
- Error handling

**Application structure**:
- Initialization phase
- Main event loop
- Command processing
- Cleanup and exit

### Performance Benchmarking

**Benchmarking methodology**:
- Consistent test conditions
- Multiple measurement runs
- Statistical analysis of results
- Comparison baselines

**Metrics to measure**:
- **Execution time**: Wall clock and CPU time
- **Memory usage**: Peak and average consumption
- **Cache performance**: Hit rates and miss penalties
- **Power consumption**: Energy efficiency

### System Integration

**Interfacing with system services**:
- Device drivers
- Kernel modules
- System daemons
- Network services

**Deployment considerations**:
- Installation procedures
- Configuration management
- Service dependencies
- Security permissions

---

## Best Practices

### Code Organization

**File structure**:
- Separate data definitions from code
- Group related functions together
- Use consistent naming conventions
- Document interfaces clearly

### Error Handling

**Robust error handling**:
- Check system call return values
- Handle exceptional conditions gracefully
- Provide meaningful error messages
- Clean up resources on errors

### Security Considerations

**Secure coding practices**:
- Validate all inputs
- Avoid buffer overflows
- Use secure memory practices
- Follow principle of least privilege

### Performance Guidelines

**Optimization priorities**:
1. **Algorithm efficiency**: Choose right algorithms
2. **Data structure optimization**: Organize data efficiently
3. **Memory access patterns**: Optimize for cache
4. **Instruction selection**: Use appropriate instructions

### Testing and Validation

**Testing strategies**:
- Unit testing individual functions
- Integration testing system components
- Performance regression testing
- Security vulnerability assessment

---

## Conclusion

This guide covers the complete spectrum of x86-64 Assembly programming, from basic concepts to advanced system programming techniques. The key to mastering Assembly is:

1. **Start with fundamentals**: Understand registers, memory, and basic operations
2. **Practice regularly**: Write code to solidify concepts
3. **Read existing code**: Study well-written Assembly programs
4. **Understand the system**: Learn how your code interacts with the OS
5. **Optimize incrementally**: First make it work, then make it fast

Assembly programming requires patience and attention to detail, but provides unmatched control over system resources and performance. Use this guide as a reference while working through the practical examples in your snippet collection.