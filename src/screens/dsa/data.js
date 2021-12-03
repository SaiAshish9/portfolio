import { CodeEditor, Span } from "./components";

export const DATA = {
  ds: {
    title: "Data Structures",
    content: (
      <>
        <Span>
          A <b>data structure</b> is a way of organising data so that it can be
          used efficiently from temporary or main memory of the computer and
          various operations can be performed on it. It is a collection of data
          types
        </Span>
        <Span>
          There are two types of data structures: <b>primitive</b> and{" "}
          <b>non-primitive.</b>
        </Span>
        <Span>
          <b>Data Type:</b>
        </Span>
        <Span>
          Data types are used to identify the type of data a memory location can
          hold and the associated operations of handling it. Types: primitive
          and non-primitive
        </Span>
        <Span>
          <b>Database:</b>
        </Span>
        <Span>
          A database is an organized collection of data to access and manage
          data easily from permanent memory (files, HDD ,etc) . Relational
          database ( tables ) ( Mysql, Postgres ) (ACID (Atomicity Consistency
          Isolation Durability) property) and non-relational database ( json,xml
          files,etc ) ( MongoDB, Redis, Cassandra DB ) (BASE (Basically
          Available, Soft state, Eventually consistent) property) are it's
          types.
        </Span>
        <Span>
          <b>Data Warehouse:</b>
        </Span>
        <Span>
          It's the collection of data from various data sources which forms the
          main component of business.It makes use of sql queries and application
          log files.It is also used to perform queries on large amounts of data.
          It involves the process of extraction, loading, and transformation for
          providing the data for analysis. #collection
        </Span>
        <Span>
          <b>Data Mining:</b>
        </Span>
        <Span>
          Data mining is considered as a process of extracting data from large
          data sets with the help of patterns. #extraction
        </Span>
        <Span>
          <b>Big Data:</b>
        </Span>
        Big Data basically refers to the data which is in large volume and has
        complex data sets(Structured, semi-structured, or non-structured) which
        cannot be processed by traditional data processing software and
        databases. Various operations like analysis, manipulation, changes, etc
        are performed on data and then it is used by companies for intelligent
        decision making. e.g.Apache Hadoop.
      </>
    ),
    types: {
      primitive: {
        title: "Primitive",
        content: (
          <>
            <Span>
              It is a kind of data structure that stores the data of only one
              type (non nullable). There are the four primitive data structures:
              Integer, Float, Boolean and Character.
            </Span>
            <Span>
              <b>Primitive Data Type Vs Primitive Data Structure:</b>
            </Span>
            <Span>
              A primitive data type (
              int,byte,short,char,long,float,double,boolean ) identifies the
              reference variable whereas a primitive data structure is a
              location in memory (a piece of data) that has pointers to other
              locations on memory
            </Span>
          </>
        ),
        types: [
          {
            title: "Integer",
            content:
              "It contains the whole numbers that can be either negative or positive. (int, byte, short, char)",
          },
          {
            title: "Float",
            content:
              "The float is a data type that can hold decimal values. When the precision of decimal value increases then the Double data type is used. (folat,double) ",
          },
          {
            title: "Boolean",
            content:
              "It is a data type that can hold either a True or a False value. It is mainly used for checking the condition. (bool)",
          },
          {
            title: "Character",
            content:
              "It is a data type that can hold a single character value both uppercase and lowercase such as 'A' or 'a' (char) ",
          },
        ],
      },
      "non-primitive": {
        title: "Non Primitive",
        types: [
          {
            title: "Linear",
            content: (
              <>
                <Span>
                  In <b>linear data structure</b>, elements are arranged in a
                  linear or sequential way such that all of them can be
                  traversed in a single run and each element is connected to
                  previous and next adjacent.
                </Span>
                <Span>e.g. : Array, Linked List, Stack, Queue, etc.</Span>
                <Span>
                  <b>Array (Homogeneous): </b>
                </Span>
                <Span>
                  It consists of a fixed number of elements of same type.
                  Operations: Insertion , Deletion , Traversal, Searching,
                  Modification And Sorting
                </Span>
                <b>Implementation</b>
                <CodeEditor
                  options={{
                    output: "Output Test",
                    codes: {
                      Javascript: {
                        code: `// class Array will override default Array class
                        class CustomArray {
                            constructor() {
                                this.length = 0;
                                this.data = {};
                            }
                            len(){
                              return this.length;
                            }
                            print(){
                              console.log(Object.values(this.data))
                            }
                            get(index) {
                                return this.data[index];
                            }
                            push(element) {
                                this.data[this.length] = element;
                                this.length++;
                                return this.length;
                            }
                            pop() {
                                const item = this.data[this.length - 1];
                                delete this.data[this.length - 1];
                                this.length--;
                                return this.data;
                            }
                            enqueue(element){
                             return this.insert(element,0);
                            }
                            dequeue(){
                             return this.delete(0);
                            }
                            delete(index) {
                                for (let i = index; i < this.length - 1; i++) {
                                    this.data[i] = this.data[i + 1];
                                }
                                delete this.data[this.length - 1];
                                this.length--;
                                return this.data;
                            }
                            insert(item, index) {
                                for (let i = this.length; i >= index; i--) {
                                    this.data[i] = this.data[i - 1];
                                }
                                this.data[index] = item;
                                this.length++;
                                return this.data;
                            }
                        }
                        const array = new CustomArray();
                        
                        console.log("Custom Array Operations:")
                        
                        array.push(12);
                        array.push(10);
                        array.push(9);
                        array.push(14);
                        array.push(10);
                        array.push(989);
                        
                        console.log("Push: ")
                        array.print()
                        console.log("Length: " + array.len())
                        // array.length gives the same output
                        // array.length() will thrown an error 
                        console.log("Get (index: 1 ): " + array.get(1))
                        console.log("Pop: ")
                        const data = array.pop()
                        let res = []
                        for(let key in data){
                          res.push(data[key])
                        }
                        console.log(res)
                        console.log("Delete: " + array.delete(1))
                        array.print()
                        console.log("Insert: " + array.insert(2))
                        array.print()
                        console.log("Enqueue: " + array.insert(2))
                        array.print()
                        console.log("Dequeue: " + array.insert(2))
                        array.print()
                        
                        console.log("Javascript Array Operations:")
                        
                        let j_arr = [1,2,3]
                        
                        console.log("1. push: " + j_arr.push(5))
                        console.log(j_arr)
                        console.log("2. pop: " + j_arr.pop())
                        console.log(j_arr)
                        console.log("3. length: " + j_arr.length)
                        console.log(j_arr)
                        console.log("4. unshift (enqueue): " + j_arr.unshift(7,8))
                        console.log(j_arr)
                        console.log("5. shift (dequeue): " + j_arr.shift(2))
                        console.log(j_arr)
                        let j = j_arr.reduce((acc,curr)=>{
                        acc[curr] = (acc[curr] || 0) +1
                        return acc
                        },{})
                        console.log("6. reduce: " + JSON.stringify(j)) 
                        j = j_arr.reduceRight((acc,curr)=>{
                        acc[curr] = (acc[curr] || 0) +1
                        return acc
                        },{})
                        // traverse from right
                        console.log("7. reduceRight: " + JSON.stringify(j)) 
                        console.log("8. forEach: ")
                        j_arr.forEach((x,_)=>console.log(x))
                        console.log("9. map: " + j_arr.map(x=>x*2))
                        console.log("10. filter: " + j_arr.filter(x=>x*2))
                        console.log("11a. slice: " + j_arr.slice(2))
                        console.log("11b. slice: " + j_arr.slice(-1))
                        console.log(j_arr)
                        console.log("12. splice: " + j_arr.splice(2))
                        // overwrites the original array
                        // add 1 remove 0 "a" (1,0,"a")
                        // splice(2) remove elements from 2
                        // splice(2,2) remove 2 elements starting from index 2
                        // splice() adds and/or removes array elements.
                        console.log(j_arr)
                        console.log("13. sort: " + j_arr.sort())
                        console.log(j_arr)
                        console.log("14. reverse: " + j_arr.reverse())
                        console.log(j_arr)
                        console.log("15. toString: " + j_arr.toString())
                        console.log(j_arr)
                        console.log("16. indexOf: " + j_arr.indexOf(9))
                        console.log(j_arr)
                        console.log("17. lastIndexOf: " + j_arr.lastIndexOf(1))
                        console.log(j_arr)
                        console.log("18. every: " + j_arr.every(x=>x===1))
                        console.log(j_arr)
                        console.log("19. some: " + j_arr.some(x=>x===1))
                        console.log(j_arr)
                        console.log("20 join: " + j_arr.join(","))
                        console.log(j_arr)
                        console.log("21. find: " + j_arr.find(x=>x===2))
                        console.log(j_arr)
                        console.log("22. findIndex: " + j_arr.find(x=>x===2))
                        console.log(j_arr)
                        console.log("23. fill: " + j_arr.fill(2))
                        console.log(j_arr)
                        console.log("24. includes: " + j_arr.includes(2))
                        console.log(j_arr)
                        console.log("25. concat: " + j_arr.concat([1,2]))
                        j_arr.push([3,4])
                        console.log(j_arr)
                        console.log("25. flat: " + j_arr.flat())
                        console.log(j_arr)
                        j_arr.fill(2)
                        console.log("26. flatMap: " + j_arr.flatMap(x=>[x,x*2]))
                        console.log(j_arr)
                        console.log("27. entries iterator")
                        for (const [index, element] of j_arr.entries())
                          console.log(index, element);
                        // keys values at(0)
                        
                        console.log("static methods: ")
                        let numbers = new Array(2)
                        console.log("Array(): " + numbers)
                        console.log("Array(): " + numbers.fill(2))
                        console.log("Array(): " + numbers.fill(new Array(2).fill(false)))
                        // If you execute the JavaScript in the environment that doesn’t support
                        // the  Array.of() method, you can use the following polyfill:
                        // if (!Array.of) {
                        //     Array.of = function() {
                        //         return Array.prototype.slice.call(arguments);
                        //     };
                        // }
                        numbers = Array.of(3);
                        console.log("Array.of(): " + numbers)
                        console.log("Array.from(): "+ Array.from("anc"))
                        console.log("Array.from(): "+ Array.from({length: 5}, (v, i) => i))
                        console.log("Array.from(): "+ Array.from([1, 2, 3], x => x + x))
                        console.log("Array.from(): "+ Array.from({length: 1}, () => Array(2).fill(false)))
                        console.log("Array.isArray(): " + Array.isArray(j_arr))
                        console.log(j_arr instanceof Array)
                        
                        const myRe = /d(b+)(d)/i
                        // 1d 1 or more b d ignore case
                        const myArray = myRe.exec('cdbBdbsbz')
                        console.log("myRe: " + myArray)
                        
                        
                        console.log("array destructuring: ")
                        let x,y
                        [x=10,y=20] = j_arr
                        console.log(x,y)
                        
                        // bind, apply, call ->
                        // https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb
                        // var pokemon = {
                        //     firstname: 'Pika',
                        //     lastname: 'Chu ',
                        //     getPokeName: function() {
                        //         var fullname = this.firstname + ' ' + this.lastname;
                        //         return fullname;
                        //     }
                        // };
                        // var pokemonName = function() {
                        //     console.log(this.getPokeName() + 'I choose you!');
                        // };
                        // var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon.
                        // 'this' of pokemon === pokemon now
                        // pokemonName.call(pokemon,'sushi', 'algorithms');
                        // Pika Chu  loves sushi and algorithms
                        // pokemonName.apply(pokemon,['sushi', 'algorithms']) 
                        // Pika Chu  loves sushi and algorithms
                        // logPokemon();
                        
                        
                        // Object.keys Object.entries Object.values
                        
                        // const {a :{ b } } = {a :{ b: 10 } } => { b :10 }`,
                        output: `
                        Custom Array Operations:
                        Push: 
                        [ 12, 10, 9, 14, 10, 989 ]
                        Length: 6
                        Get (index: 1 ): 10
                        Pop: 
                        [ 12, 10, 9, 14, 10 ]
                        Delete: [object Object]
                        [ 12, 9, 14, 10 ]
                        Insert: [object Object]
                        [ 12, 9, 14, 10, 2 ]
                        Enqueue: [object Object]
                        [ 12, 9, 14, 10, 2 ]
                        Dequeue: [object Object]
                        [ 12, 9, 14, 10, 2 ]
                        Javascript Array Operations:
                        1. push: 4
                        [ 1, 2, 3, 5 ]
                        2. pop: 5
                        [ 1, 2, 3 ]
                        3. length: 3
                        [ 1, 2, 3 ]
                        4. unshift (enqueue): 5
                        [ 7, 8, 1, 2, 3 ]
                        5. unshift (dequeue): 7
                        [ 8, 1, 2, 3 ]
                        6. reduce: {"1":1,"2":1,"3":1,"8":1}
                        7. reduceRight: {"1":1,"2":1,"3":1,"8":1}
                        8. forEach: 
                        8
                        1
                        2
                        3
                        9. map: 16,2,4,6
                        10. filter: 8,1,2,3
                        11a. slice: 2,3
                        11b. slice: 3
                        [ 8, 1, 2, 3 ]
                        12. splice: 2,3
                        [ 8, 1 ]
                        13. sort: 1,8
                        [ 1, 8 ]
                        14. reverse: 8,1
                        [ 8, 1 ]
                        15. toString: 8,1
                        [ 8, 1 ]
                        16. indexOf: -1
                        [ 8, 1 ]
                        17. lastIndexOf: 1
                        [ 8, 1 ]
                        18. every: false
                        [ 8, 1 ]
                        19. some: true
                        [ 8, 1 ]
                        20 join: 8,1
                        [ 8, 1 ]
                        21. find: undefined
                        [ 8, 1 ]
                        22. findIndex: undefined
                        [ 8, 1 ]
                        23. fill: 2,2
                        [ 2, 2 ]
                        24. includes: true
                        [ 2, 2 ]
                        25. concat: 2,2,1,2
                        [ 2, 2, [ 3, 4 ] ]
                        25. flat: 2,2,3,4
                        [ 2, 2, [ 3, 4 ] ]
                        26. flatMap: 2,4,2,4,2,4
                        [ 2, 2, 2 ]
                        27. entries iterator
                        0 2
                        1 2
                        2 2
                        static methods: 
                        Array(): ,
                        Array(): 2,2
                        Array(): false,false,false,false
                        Array.of(): 3
                        Array.from(): a,n,c
                        Array.from(): 0,1,2,3,4
                        Array.from(): 2,4,6
                        Array.from(): false,false
                        Array.isArray(): true
                        true
                        myRe: dbBd,bB,d
                        array destructuring: 
                        2 2`,
                      },
                      Java: {
                        code: `import java.util.*;
                        import java.io.*;
                        import java.util.stream.*;
                        
                        class Main {
                        
                          static PrintStream ps = System.out;
                        
                          static class CustomArray {
                        
                            private HashMap<Integer,Integer> data;
                            private int capacity;
                            private int length;
                        
                            CustomArray() {
                                data = new HashMap<Integer,Integer>();
                                capacity = 1;
                                length = 0;
                            }
                            int len(){
                              return length;
                            }
                        
                            @Override
                            public String toString(){
                              return data.toString();
                            }
                            int get(int index) {
                                // return data.get(index).intValue();
                                return Integer.valueOf(data.get(index));
                            }
                            int push(int element) {
                                data.put(this.length, element);
                                length++;
                                return length;
                            }
                            HashMap<Integer,Integer> pop() {
                                int item = data.get(this.length - 1).intValue();
                                data.remove(length-1);
                                length--;
                                return data;
                            }
                            int enqueue(int element) {
                                return insert(element, 0);
                            }
                            HashMap<Integer,Integer> dequeue() {
                                return delete(0);
                            }
                            HashMap<Integer,Integer> delete(int index) {
                                for (int i = index; i < this.length - 1; i++) {
                                    data.put(i,data.get(i + 1));
                                }
                                data.remove(length-1);
                                this.length--;
                                return this.data;
                            }
                            int insert(int item, int index) {
                                for (int i = this.length; i >= index; i--) {
                                    data.put(i, data.get(i - 1));
                                }
                                data.put(index, item);
                                length++;
                                return length;
                            }
                            }
                            public static void main(String args[]) {
                              CustomArray arr = new CustomArray();
                              ps.println("Custom Array Operations:");
                              ps.println("Push: ");
                              arr.push(9);
                              arr.push(8);
                              arr.push(7);
                              ps.println(arr);
                              ps.println("Length: " + arr.len());
                              ps.println("Get (index: 1): "+ arr.get(1));
                              ps.println("Pop: " + arr.pop());
                              ps.println("Delete: " + arr.delete(1));
                              ps.println("Insert: " + arr.insert(9,1));
                              ps.println(arr);
                              ps.println("Enqueue: " + arr.enqueue(10));
                              ps.println(arr);
                              ps.println("Dequeue: " + arr.dequeue());
                              ps.println("");
                              ps.println("Java Array Operations:");
                        
                              int j_arr[];
                              j_arr = new int[3];
                              ps.println(j_arr.getClass().getSuperclass());
                              j_arr[0] = 1;
                              int j_arr1[] = j_arr.clone(); 
                              ps.println(j_arr==j_arr1);
                              ps.println(Arrays.toString(j_arr1));
                              
                         // Collections API: https://www.geeksforgeeks.org/collections-in-java-2/
                             
                            List<Integer> al = Arrays.stream(j_arr1).boxed().collect(Collectors.toList());
                            //  List al = Arrays.asList(j_arr1);
                            //  Collections.addAll(al,j_arr1);
                            ps.println(Arrays.toString(al.stream().mapToInt(i -> i).toArray()));
                            //  non synchronized dynamic array
                            al.add(10);
                            ps.println(Arrays.toString(al.stream().mapToInt(i -> i).toArray()));
                            al.remove(2);
                            ps.println(al.get(0));
                        
                        //  synchronized dynamic array
                            Vector<Integer> v = new Vector();
                            v.addElement(9);
                            ps.println(v.toString());
                            Enumeration enu = v.elements();
                            while (enu.hasMoreElements()) {
                              ps.println(enu.nextElement());
                            }
                            }
                        }
                          `,
                        output: `
                        Custom Array Operations:
                        Push: 
                        {0=9, 1=8, 2=7}
                        Length: 3
                        Get (index: 1): 8
                        Pop: {0=9, 1=8}
                        Delete: {0=9}
                        Insert: 2
                        {0=9, 1=9}
                        Enqueue: 3
                        {0=10, 1=9, 2=9}
                        Dequeue: {0=9, 1=9}
                        
                        Java Array Operations:
                        class java.lang.Object
                        false
                        [1, 0, 0]
                        [1, 0, 0]
                        [1, 0, 0, 10]
                        1
                        [9]
                        9
                        `,
                      },
                      Python: {
                        output: `Custom Array Operations:
                        Append:
                        {0: 1, 1: 9}
                        Length: 2
                        Get (index: 1): 9
                        Pop:
                        {0: 1}
                        Delete: None
                        {}
                        please enter appropriate index..
                        Insert: None
                        {}
                        Enqueue: None
                        {0: 9}
                        Dequeue: None
                        {}
                        
                        List operations:
                        p_arr = [9, 8, 1]
                        1. reverse: [1, 8, 9]
                        2. sort: None
                        3. sorted: [9, 8, 1]
                        4. min: 1
                        5. max: 9
                        6. sum: 18
                        7. index: 0
                        8. map: [2, 16, 18]
                        9. filter: [1]
                        10. extend: [1, 8, 9, 9, 8]
                        11. pop: [1, 8, 9, 9]
                        12. dequeue: [8, 9, 9]
                        13. enqueue: [8, 8, 9, 9]
                        14. append: [8, 8, 9, 9, 8]
                        15. insert: [8, 9, 8, 9, 9, 8]
                        16. faltten using list comprehension[1, 2, 2, 4]
                        p_arr = [9, 8, 9]
                        17a. reduce:26
                        17b. reduce:26
                        18. slice:[9, 8]
                        19. find:False
                        20. all(js-> every):False
                        21. any(js -> some):True
                        `,
                        code: `import ctypes
class CustomArray():
  def __init__(self):
    self.length = 0
    self.capacity = 1 
    self.data = {}
    # self.A = self.make_array(self.capacity)
    # creates object of specified capacity
    
  def __len__(self):
    return self.length

  def __repr__(self):
    return str(self.data)
  # or __str__
  # __str__() is more human friendly whereas __repr__() is more information rich and machine friendly and can be used to reconstruct the object. In fact, we can use repr() function with eval() to construct the object.
  # x == eval(repr(x))

  def __getitem__(self, k):
    if not 0 <= k <self.length:
      return IndexError('K is out of bounds !')
    return self.data[k]
    
  def append(self, ele):
    self.data[self.length] = ele
    self.length += 1

  def pop(self):
    if self.length==0:
      print("Array is empty deletion not Possible")
      return
    del self.data[self.length-1]
    self.length-=1
    return self.data
  
  def enqueue(self,element):
    self.insert(element,0)

  def dequeue(self):
    self.delete(0)    

  def delete(self,index):
    if self.length==0:
      print("Array is empty deletion not Possible")
      return
    if index<0 or index>=self.length:
      return IndexError("Index out of bound....deletion not possible")		
    if index==self.length-1:
      del self.data[index]
      self.length-=1
      return		
    for i in range(index,self.length-1):
      self.data[i]=self.data[i+1]			
    del self.data[self.length-1]
    self.length-=1
    return self.data

  def insert(self,item,index):
    if index < 0 or index > self.length:
      print("please enter appropriate index..")
      return
    for i in range(self.length-1,index-1,-1):
      self.data[i+1]=self.data[i]
    self.data[index]=item
    self.length+=1
    return self.data
    
  # def _resize(self, new_cap):
  #   B = self.make_array(new_cap) 
  #   for k in range(self.length): 
  #     B[k] = self.data[k]
  #   self.data = B 
  #   self.capacity = new_cap 
    
  # def make_array(self, new_cap):
  #   return (new_cap * ctypes.py_object)()

arr = CustomArray()
print('Custom Array Operations:')
print('Append:')
arr.append(1)
arr.append(9)
print(arr)
print(f'Length: {len(arr)}')
# print(arr.__dict__)
print(f'Get (index: 1): {arr[1]}')
print(f'Pop:')
arr.pop()
print(arr)
print(f'Delete: {arr.delete(0)}')
print(arr)
print(f'Insert: {arr.insert(1,1)}')
print(arr)
print(f'Enqueue: {arr.enqueue(9)}')
print(arr)
print(f'Dequeue: {arr.dequeue()}')
print(arr)
print('')
print('List operations:')
p_arr = [9,8,1]
print(f'p_arr = {p_arr}')
print('1. reverse: ' + str(p_arr[::-1]))
print('2. sort: ' + str(p_arr.sort()))
print('3. sorted: ' + str(sorted(p_arr,reverse=True)))
print('4. min: ' + str(min(p_arr)))
print('5. max: ' + str(max(p_arr)))
print('6. sum: ' + str(sum(p_arr)))
print('7. index: ' + str(p_arr.index(1)))
print('8. map: ' + str(list(map(lambda x:x*2,p_arr))))
print('9. filter: ' + str(list(filter(lambda x:x==1,p_arr))))
p_arr.extend([9,8])
print('10. extend: ' + str(p_arr))
p_arr.pop()
print('11. pop: ' + str(p_arr))
p_arr.pop(0)
print('12. dequeue: ' + str(p_arr))
p_arr.insert(0,8)
print('13. enqueue: ' + str(p_arr))
p_arr.append(8)
print('14. append: ' + str(p_arr))
p_arr.insert(1,9)
print('15. insert: ' + str(p_arr))
p_arr = [[1,2],[2,4]]
print('16. faltten using list comprehension'+ str([y for x in p_arr for y in x ]))
import functools
import operator
p_arr = [*[9,8],9] # unpacking
print(f'p_arr = {p_arr}')
print('17a. reduce:' + str(functools.reduce(operator.add,p_arr)))
print('17b. reduce:' + str(functools.reduce(lambda acc,curr: acc+curr,p_arr)))
print('18. slice:' + str(p_arr[:2]))
print('19. find:' + str(2 in  p_arr))
print('20. all(js-> every):' + str(all([True,False])))
print('21. any(js -> some):' + str(any([True,False])))

# def names_tuple(*args):
#     return args
# names_tuple('Michael', 'John', 'Nancy')
# # ('Michael', 'John', 'Nancy')

# def names_dict(**kwargs):
#     return kwargs
# names_dict(Jane = 'Doe')
# {'Jane': 'Doe'}                        
                        `,
                      },
                      "C++": {
                        code: `#include <iostream>
                      #include <bits/stdc++.h>
                      #include <array>
                      
                      using namespace std;
                      
                      class CustomArray{
                        private:
                        int length;
                        map<int,int> data;
                      
                        public:
                        int len(){
                          return this->length;
                        }
                      
                        void print(){
                          string s;
                          for(auto i=data.begin();i != data.end();i++){
                            s+= to_string(i -> second) + " ";
                           }
                          cout<< s << endl;
                        }
                      
                        int get(int index){
                         return this -> data[index];
                        }
                      
                        int push(int element) {
                          this -> data[this -> length] = element;
                          this -> length+=1;
                          return this -> length;
                        }
                        
                        map<int,int> pop() {
                          int item = data[length - 1];
                          auto it = data.end();
                          it--;
                          data.erase(it);
                          length-=1;
                          return data;
                        }
                      
                        int insert(int ele,int index) {
                          if(ele==length-1){
                            push(ele);
                          }else{
                          for(auto i = length-1; i > index; i--) {
                            data[i+1] = data[i];
                          }
                          data[index] = ele;
                          length+=1;
                          }
                          return length;
                        }
                      
                        map<int,int> remove(int index) {
                          for(auto i = index; i < length-1; i++) {
                            data[i] = data[i + 1];
                          }
                          auto it = data.end();
                          it--;
                          data.erase(it);    length-=1;
                          return data;
                        }
                      
                        map<int,int> dequeue() {
                           return this -> remove(0);
                        }
                      
                        int enqueue(int ele) {
                          return insert(ele,0);
                        }
                      
                        CustomArray(){
                          length = 0;
                          data = {}; 
                        };
                      
                      };
                      
                      int main(){
                        CustomArray arr;
                        cout << "Custom Array Operations:" << endl;
                      
                        cout << "Push: " << endl;
                        arr.push(9);
                        arr.push(8);
                        arr.push(1);
                        arr.push(7);
                        arr.print();
                        cout << "Length: " << arr.len() << endl;
                        cout << "Get (index: 1 ): " << arr.get(1) << endl;
                        cout << "Pop: " << endl;
                        arr.pop();
                        arr.print();
                        cout << "Length: " << arr.len() << endl;
                        cout << "Delete: " << endl;
                        arr.remove(1);
                        arr.print();
                        cout << "Length: " << arr.len() << endl;
                        cout << "Insert: " << endl;
                        arr.insert(7,0);
                        arr.print();
                        cout << "Length: " << arr.len() << endl;
                        cout << "Enqueue: " << endl;
                        arr.enqueue(10);
                        arr.print();
                        cout << "Length: " << arr.len() << endl;
                        cout << "Dequeue: " << endl;
                        arr.dequeue();
                        arr.print();
                        cout << "Length: " << arr.len() << endl;
                      
                        cout << "C++ Array Operations: "<< endl;
                      
                        array<int,6> ar = {1, 2, 3, 4, 5, 6};
                      
                        cout << "1. get: " << get<0>(ar) << " , " << ar[0] << endl;
                        cout << "2. size: " << ar.size() << endl;
                        cout << "3. maxsize: " << ar.max_size() << endl;
                        cout << "4. size: " << ar.size() << endl;
                        cout << "5. front: " << ar.front() << endl;
                        cout << "6. back: " << ar.back() << endl;
                        ar.fill(9);
                        cout << "7. fill: " << ar[0] << endl;
                      
                        // stl -> algorithms , functions , containers , iterators
                        // https://www.geeksforgeeks.org/the-c-standard-template-library-stl/
                      
                        return 0;
                      }
                      `,
                        output: `
                      Custom Array Operations:
Push: 
9 8 1 7 
Length: 4
Get (index: 1 ): 8
Pop: 
9 8 1 
Length: 3
Delete: 
9 1 
Length: 2
Insert: 
7 1 1 
Length: 3
Enqueue: 
10 1 1 1 
Length: 4
Dequeue: 
1 1 1 
Length: 3
C++ Array Operations: 
1. get: 1 , 1
2. size: 6
3. maxsize: 6
4. size: 6
5. front: 1
6. back: 6
7. fill: 9
                      `,
                      },
                      Kotlin: {
                        code: `import java.io.PrintStream

                        internal object Main {
                            var ps: PrintStream = System.out
                            @JvmStatic
                            fun main(args: Array<String>) {
                                val arr = CustomArray()
                                ps.println("Custom Array Operations:")
                                ps.println("Push: ")
                                arr.push(9)
                                arr.push(8)
                                arr.push(7)
                                ps.println(arr)
                                ps.println("Length: " + arr.len())
                                ps.println("Get (index: 1): " + arr[1])
                                ps.println("Pop: " + arr.pop())
                                ps.println("Delete: " + arr.delete(1))
                                ps.println("Insert: " + arr.insert(9, 1))
                                ps.println(arr)
                                ps.println("Enqueue: " + arr.enqueue(10))
                                ps.println(arr)
                                ps.println("Dequeue: " + arr.dequeue())
                            }
                        
                            internal class CustomArray {
                                private val data: HashMap<Int, Int?> = HashMap()
                                private val capacity: Int = 1
                                private var length: Int = 0
                        
                        //        init {
                        //            length = 0
                        //        }
                        
                                fun len(): Int {
                                    return length
                                }
                        
                                override fun toString(): String {
                                    return data.toString()
                                }
                        
                                operator fun get(index: Int): Int {
                                    // return data.get(index).intValue();
                                    return Integer.valueOf(data[index]!!)
                                }
                        
                                fun push(element: Int): Int {
                                    data[length] = element
                                    length++
                                    return length
                                }
                        
                                fun pop(): HashMap<Int, Int?> {
                                    val item = data[length - 1]!!.toInt()
                                    data.remove(length - 1)
                                    length--
                                    return data
                                }
                        
                                fun enqueue(element: Int): Int {
                                    return insert(element, 0)
                                }
                        
                                fun dequeue(): HashMap<Int, Int?> {
                                    return delete(0)
                                }
                        
                                fun delete(index: Int): HashMap<Int, Int?> {
                                    for (i in index until length - 1) {
                                        data[i] = data[i + 1]
                                    }
                                    data.remove(length - 1)
                                    length--
                                    return data
                                }
                        
                                fun insert(item: Int, index: Int): Int {
                                    for (i in length downTo index) {
                                        data[i] = data[i - 1]
                                    }
                                    data[index] = item
                                    length++
                                    return length
                                }
                            }
                        }`,
                        output: `
                        Custom Array Operations:
                        Push: 
                        {0=9, 1=8, 2=7}
                        Length: 3
                        Get (index: 1): 8
                        Pop: {0=9, 1=8}
                        Delete: {0=9}
                        Insert: 2
                        {0=9, 1=9}
                        Enqueue: 3
                        {0=10, 1=9, 2=9}
                        Dequeue: {0=9, 1=9}
                                                `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Linked List:</b>
                </Span>
                <Span>
                  It consists of nodes which are stored in non contiguos memory
                  locations. It's size is dynamic. Node consists of a data field
                  and links to adjacent neighbours. These links are also known
                  as self referential pointers as they are referring to other
                  nodes of same type.
                </Span>
                <Span>
                  Types : Singly Linked List, Circular Linked List, Doubly
                  Linked List And Misc
                </Span>
                <b>Implementation</b>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class Node {
                          constructor(data) {
                              this.data = data
                              this.next = null
                          }
                      }
                      class LinkedList {
                          constructor() {
                              this.head = null
                          }
                          push(data) {
                              let node = new Node(data)
                              if (this.head == null) {
                                  this.head = node
                              } else {
                                  let temp = this.head
                                  while (temp.next) {
                                      temp = temp.next
                                  }
                                  temp.next = node
                              }
                          }
                          pop(){
                            if (this.head == null) {
                                return
                            }else if(this.head.next==null){
                              this.head=null
                              return
                            } 
                            else {
                                let temp = this.head
                                while (temp.next.next) {
                                  temp = temp.next
                                }
                                const last = temp.next 
                                temp.next = null
                      // delete temp doesn't work , we can delete object attributes but
                      //  not object itself in javascript
                              }
                          }
                          count() {
                              var count = 0
                              let node = this.head;
                              while (node != null) {
                                  count += 1
                                  node = node.next
                              }
                              return count
                          }
                          get(index){
                            if(this.head == null) return
                            else if(index>=this.count()) return
                            else {
                               let i=0
                               let temp = this.head
                               while(i < index){
                                  temp=temp.next
                                  i++
                               }
                               return temp.data
                            }
                          }
                          print() {
                              let temp = this.head
                              let output = ""
                              while (temp != null) {
                                  output+=temp.data + " "
                                  temp = temp.next
                              }
                              console.log(output)
                          }
                          insert(ele,index){
                            if(this.head==null || index > this.count()) return
                            let node = new Node(ele)
                              if (index == 0) {
                              node.next = this.head;
                              this.head = node;
                              } else {
                                  let it = 0,prev,curr;
                                  curr = this.head;
                                  prev = curr;
                                  while (it < index) {
                                      it++;
                                      prev = curr;
                                      curr = curr.next;
                                  }
                                  node.next = curr;
                                  prev.next = node;
                              }
                            return this.count()
                          }
                          delete(index){
                            if(this.head==null || index >= this.count()) return
                            else {
                              let curr,prev,it = 0
                              curr = this.head
                              prev = curr
                              if(index===0){
                                this.head = curr.next
                              }else{
                                while(it<index){
                                  it++
                                  prev = curr
                                  curr = curr.next
                                }  
                                prev.next = curr.next
                              }
                              return curr.data
                            }
                          }
                          enqueue(ele){
                             this.insert(ele,0)
                          }
                          dequeue(){
                             this.delete(0)
                          }
                      }
                      
                      const l = new LinkedList();
                      
                      console.log("Singly Linked List Operations:")
                      console.log("Push:")
                      l.push(9);
                      l.push(8);
                      l.push(10);
                      l.print()
                      console.log("Pop:")
                      l.pop()
                      l.print()
                      console.log("Count: " + l.count())
                      console.log("Get (Index 1): " + l.get(1))
                      console.log("Insert:")
                      l.insert(7,1)
                      l.print()
                      console.log("Delete:")
                      l.delete(1)
                      l.print()
                      console.log("Enqueue:")
                      l.enqueue(5)
                      l.print()
                      console.log("Dequeue:")
                      l.dequeue()
                      l.print()
                      `,
                        output: `
                        Singly Linked List Operations:
                        Push:
                        9 8 10 
                        Pop:
                        9 8 
                        Count: 2
                        Get (Index 1): 8
                        Insert:
                        9 7 8 
                        Delete:
                        9 8 
                        Enqueue:
                        5 9 8 
                        Dequeue:
                        9 8 
                        `,
                      },
                      Java: {
                        code: `
                      import java.io.*;

class Node{
int data;
Node next;
Node(int d){
data = d;
next = null;
}
}

class Main {

static PrintStream ps = System.out;

Node head;

public void push(int data){
Node node = new Node(data);
if(head==null){
head = node;
}else{
Node q = head;
while(q.next != null){
q=q.next;
}
q.next = node;
}
}

void pop(){
  if (head == null) {
      return;
  } else if (head.next == null) {
      head = null;
      return;
   } else {
      Node temp = head;
      while (temp.next.next != null) {
        temp = temp.next;
      }
      Node last = temp.next;
      temp.next = null;
  }
}

public int count(){
int count = 0;
Node p = head;
while(p!=null){
count++;
p = p.next;
}
return count;
}

int get(int index) {
  if (head == null) return -1;
  else if (index >= count()) return -1;
  else {
    int i = 0;
    Node temp = head;
    while (i < index) {
      temp = temp.next;
      i++;
    }
  return temp.data;
  }
  }
  
  int insert(int ele,int index){
    if (this.head == null || index >  this.count()) return -1;
    Node node = new Node(ele);
    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      Node curr,prev;
      curr = this.head;
      prev = curr; 
      int it = 0;
      while (it < index) {
        it++;
        prev = curr;
        curr = curr.next;
      }
      node.next = curr;
      prev.next = node;
    }
    return this.count();
  }

  int delete(int index){
     if (this.head == null || index >= this.count()) return -1;
        else {
            Node curr, prev;
            int it = 0;
            curr = this.head;
            prev = curr;
            if (index == 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            return curr.data;
        }
  }

  int enqueue(int ele)
  {
    return this.insert(ele,0);
  } 

  int dequeue(){
    return this.delete(0);
  }

public void print(){
Node temp = head;
StringBuilder sb = new StringBuilder();
while(temp!=null){
sb.append(temp.data + " ");
temp=temp.next;
}
ps.println(sb.toString());
}

public static void main(String[] args) {
Main l = new Main();
l.push(2);
l.push(4);
l.push(3);
l.push(5);
l.push(6);
ps.println("Singly Linked List Operations:");
ps.println("Push:");
l.push(4);
l.print();
ps.println("Pop: ");
l.pop();
l.print();
ps.println("Count: "+ l.count());
ps.println("Get (Index 1): "+ l.get(1));
ps.println("Delete: ");
l.delete(2);
l.print();
ps.println("Enqueue: ");
l.enqueue(7);
l.print();
ps.println("Dequeue: ");
l.dequeue();
l.print();
}
}
                      `,
                        output: `
                      Singly Linked List Operations:
Push:
2 4 3 5 6 4 
Pop: 
2 4 3 5 6 
Count: 5
Get (Index 1): 4
Delete: 
2 4 5 6 
Enqueue: 
7 2 4 5 6 
Dequeue: 
2 4 5 6 
                      `,
                      },
                      Python: {
                        code: `class Node:
def __init__(self,data):
  self.data=data
  self.next=None

class LinkedList:

def __init__(self):
  self.head = None

def append(self,data): 
  node = Node(data)
  if self.head is None:
    self.head = node
  else:
    temp = self.head
    while temp.next is not None:
      temp= temp.next
    temp.next = node

def pop(self):
  if self.head is None:
      return
  elif self.head.next is None:
      self.head = None
      return
  else:
    temp = self.head
  while temp.next.next is not None:
    temp = temp.next
  last = temp.next
  temp.next = None

def display(self):
  temp = self.head
  while temp is not None:
    print(temp.data,end =' ')
    temp = temp.next
  print('')

def get(self,index):
  if self.head is None:
    return
  elif index >= self.count():              return
  else:
    i = 0
    temp = self.head
    while i < index:
      temp = temp.next
      i+=1
  return temp.data
          
def count(self):
  x=0
  temp=self.head
  while temp is not None:
    x+=1
    temp=temp.next
  return x

def insert(self,ele,index):
  if self.head is None or index > self.count(): 
    return
  node = Node(ele)
  if index == 0:
    node.next = self.head;
    self.head = node;
  else:
    it = 0
    prev = curr = None
    curr = self.head;
    prev = curr
    while it < index:
      it+=1
      prev = curr
      curr = curr.next
    node.next = curr
    prev.next = node
  return self.count()

def delete(self,index):
  if self.head is None or index >= self.count():
    return
  else:
    curr = prev = it = 0
    curr = self.head
    prev = curr
    if index == 0:
      self.head = curr.next
    else:
      while it < index:
        it+=1
        prev = curr
        curr = curr.next
      prev.next = curr.next
    return curr.data

def enqueue(self,ele):
  return self.insert(ele,0)

def dequeue(self):
  return self.delete(0)

l = LinkedList()
print("Singly Linked List Operations:")
print("Append:")
l.append(2)
l.append(4)
l.append(3)
l.display()
print("Pop:")
l.display()
print("Count: " + str(l.count()))
print("Get (Index 1): " + str(l.get(2)))
print("Insert: ")
l.insert(7,1)
l.display()
print("Enqueue: ")
l.enqueue(9)
l.display()
print("Delete: ")
l.delete(1)
l.display()
print("Dequeue: ")
l.dequeue()
l.display()
                      `,
                        output: `
                      Singly Linked List Operations:
                      Append:
                      2 4 3 
                      Pop:
                      2 4 3 
                      Count: 3
                      Get (Index 1): 3
                      Insert: 
                      2 7 4 3 
                      Enqueue: 
                      9 2 7 4 3 
                      Delete: 
                      9 7 4 3 
                      Dequeue: 
                      7 4 3   
                      `,
                      },
                      "C++": {
                        code: `
                      #include<iostream>
using namespace std;

struct Node {
int data;
Node *next; // self referential pointer
Node() : data(0), next(nullptr) {}
Node(int x) : data(x), next(nullptr) {}
Node(int x, Node *next) : data(x), next(next) {}
};

// class Node {
// public:
//     int data;
//     Node* next;
// };

class LinkedList {
 
private:
Node* head;

public:

LinkedList(){
  this -> head = NULL;
}

void push(int data){
  Node* node = new Node(data);
  if (this -> head == nullptr) {
    this -> head = node;
  } else {
    Node* temp = this->head;
    while (temp -> next) {
      temp = temp -> next;
    }
    temp->next = node;
  }
}

void pop(){
  
}

int count(){
  int len = 0;
  Node* node = this -> head;
  while (node != nullptr) {
    len += 1;
    node = node -> next;
  }
  return len;
}

void display(){
   Node* temp = head;
   string output;
   while(temp != nullptr){
    output += to_string(temp->data) + " ";
    temp = temp -> next;
   } 
   cout << output << endl;
}

int get(int index){
   if(this->head == nullptr) return -1;
   else if(index >= this->count()){
     return -1;
   }else{
     int i = 0;
     Node* temp = this -> head;
     while(i < index){
       temp = temp -> next;
       i++;
     } 
     return temp->data;
   }
}

int insert(int ele,int index){
  if(this->head == nullptr || index > this->count()) return -1;
    Node* node = new Node(ele);
    if (index == 0) {
      node->next = this->head;
      this->head = node;
    } else {
      int it = 0;
      Node *prev, *curr;
      curr = this->head;
      prev = curr;
      while (it < index) {
        it++;
        prev = curr;
        curr = curr->next;
      }
      node->next = curr;
      prev->next = node;
    }
    return this->count();
}

int remove(int index){
  if (this->head == nullptr || index >= this->count()) 
  return -1;
  else {
    Node *curr, *prev;
    int it = 0;
    curr = this->head;
    prev = curr;
    if (index == 0) {
      this->head = curr->next;
    } else {
    while (it < index) {
      it++;
      prev = curr;
      curr = curr->next;
    }
    prev->next = curr->next;
    }
    return curr->data;
  }
  return -1;
}

int enqueue(int data){
   return this->insert(data,0);
}

int dequeue(){
  return this -> remove(0);
}

};

int main(){
  LinkedList l;
  cout << "Singly Linked List Operations:" << endl;
  cout << "Push:" << endl;
  l.push(9);
  l.push(8);
  l.push(10);
  l.display();
  cout << "Pop:" << endl;
  l.pop();
  l.display();
  cout << "Count: " << l.count() << endl;
  cout << "Get (Index 1): " <<
  l.get(1) << endl;
  cout << "Insert: " << endl;
  l.insert(9,2);
  l.display();
  cout << "Delete: " << endl;
  l.remove(2);
  l.display();
  cout << "Enqueue: " << endl;
  l.enqueue(8);
  l.display();
  cout << "Dequeue: " << endl;
  l.dequeue();
  l.display();
  return 0;
}
                      `,
                        output: `
                      Singly Linked List Operations:
Push:
9 8 10 
Pop:
9 8 10 
Count: 3
Get (Index 1): 8
Insert: 
9 8 9 10 
Delete: 
9 8 10 
Enqueue: 
8 9 8 10 
Dequeue: 
9 8 10 
                      `,
                      },
                      Kotlin: {
                        code: `
                      internal class Node(var data: Int) {
                        var next: Node? = null
                    }
                    
                    internal class Main {
                        var head: Node? = null
                        fun push(data: Int) {
                            val node = Node(data)
                            if (head == null) {
                                head = node
                            } else {
                                var q = head
                                while (q!!.next != null) {
                                    q = q.next
                                }
                                q.next = node
                            }
                        }
                    
                        fun pop() {
                            if (head == null) {
                                return
                            } else if (head!!.next == null) {
                                head = null
                                return
                            } else {
                                var temp = head
                                while (temp!!.next!!.next != null) {
                                    temp = temp.next
                                }
                                val last = temp.next
                                temp.next = null
                            }
                        }
                    
                        fun count(): Int {
                            var count = 0
                            var p = head
                            while (p != null) {
                                count++
                                p = p.next
                            }
                            return count
                        }
                    
                        operator fun get(index: Int): Int {
                            return if (head == null) -1 else if (index >= count()) -1 else {
                                var i = 0
                                var temp = head
                                while (i < index) {
                                    temp = temp!!.next
                                    i++
                                }
                                temp!!.data
                            }
                        }
                    
                        fun insert(ele: Int, index: Int): Int {
                            if (head == null || index > this.count()) return -1
                            val node = Node(ele)
                            if (index == 0) {
                                node.next = head
                                head = node
                            } else {
                                var curr: Node?
                                var prev: Node?
                                curr = head
                                prev = curr
                                var it = 0
                                while (it < index) {
                                    it++
                                    prev = curr
                                    curr = curr!!.next
                                }
                                node.next = curr
                                prev!!.next = node
                            }
                            return this.count()
                        }
                    
                        fun delete(index: Int): Int {
                            return if (head == null || index >= this.count()) -1 else {
                                var curr: Node?
                                var prev: Node?
                                var it = 0
                                curr = head
                                prev = curr
                                if (index == 0) {
                                    head = curr!!.next
                                } else {
                                    while (it < index) {
                                        it++
                                        prev = curr
                                        curr = curr!!.next
                                    }
                                    prev!!.next = curr!!.next
                                }
                                curr.data
                            }
                        }
                    
                        fun enqueue(ele: Int): Int {
                            return insert(ele, 0)
                        }
                    
                        fun dequeue(): Int {
                            return delete(0)
                        }
                    
                        fun print() {
                            var temp = head
                            val sb = StringBuilder()
                            while (temp != null) {
                                sb.append(temp.data.toString() + " ")
                                temp = temp.next
                            }
                            ps.println(sb.toString())
                        }
                    
                        companion object {
                            var ps = System.out
                            @JvmStatic
                            fun main(args: Array<String>) {
                                val l = Main()
                                l.push(2)
                                l.push(4)
                                l.push(3)
                                l.push(5)
                                l.push(6)
                                ps.println("Singly Linked List Operations:")
                                ps.println("Push:")
                                l.push(4)
                                l.print()
                                ps.println("Pop: ")
                                l.pop()
                                l.print()
                                ps.println("Count: " + l.count())
                                ps.println("Get (Index 1): " + l[1])
                                ps.println("Delete: ")
                                l.delete(2)
                                l.print()
                                ps.println("Enqueue: ")
                                l.enqueue(7)
                                l.print()
                                ps.println("Dequeue: ")
                                l.dequeue()
                                l.print()
                            }
                        }
                    }
                      `,
                        output: `
                      Singly Linked List Operations:
                      Push:
                      2 4 3 5 6 4 
                      Pop: 
                      2 4 3 5 6 
                      Count: 5
                      Get (Index 1): 4
                      Delete: 
                      2 4 5 6 
                      Enqueue: 
                      7 2 4 5 6 
                      Dequeue: 
                      2 4 5 6 
                      `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Stack (LIFO/FILO) :</b>
                </Span>
                <Span>
                  Various operations are performed in the order of Last In Fisrt
                  Out (LIFO). It's used in depth first search which is used for
                  backtracking algorithm.
                </Span>
                <Span>
                  Example: Combination of plates placed on top of each other
                </Span>
                <b>Implementation</b>
                <CodeEditor
                  // https://www.geeksforgeeks.org/implement-a-stack-using-singly-linked-list/
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                      
                      `,
                        output: `
                      
                      `,
                      },
                    },
                  }}
                />
                <b>Utilization:</b>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: { code: "" },
                    },
                  }}
                />
                <Span>
                  <b>Queue (FIFO) :</b>
                </Span>
                <b>Implementation</b>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: { code: "" },
                    },
                  }}
                />
                <b>Utilization:</b>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: { code: "" },
                    },
                  }}
                />
                <Span>
                  <b>Priority Queue:</b>
                </Span>
                <b>Utilization:</b>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: { code: "" },
                      Java: { code: "" },
                      Python: { code: "" },
                      "C++": { code: "" },
                      Kotlin: { code: "" },
                    },
                  }}
                />
                <Span>
                  <b>Circular Queue:</b>
                </Span>
                <b>Implementation</b>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: { code: "" },
                    },
                  }}
                />
                <Span>
                  <b>Deque:</b>
                </Span>
                <b>Utilization:</b>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: { code: "" },
                      Java: { code: "" },
                      Python: { code: "" },
                      "C++": { code: "" },
                      Kotlin: { code: "" },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Non Linear",
          },
        ],
        content: (
          <>
            <Span>
              Non-primitive data structure can store the data of more than one
              type whose size is not fixed.
            </Span>
            <Span>
              <b>Physical Data Structure</b>
            </Span>
            <Span>
              A physical data structure refers to the actual organization of
              data on a storage device.
            </Span>
            <Span>
              <b>e.g. : </b> Arrays and Linked List
            </Span>
            <Span>
              <b>Logical Data Structure</b>
            </Span>
            <Span>
              The logical data structure refers to how the information appears
              to a program or user. For example, a data file is a collection of
              information stored together. This is its logical structure.
            </Span>
            <Span>
              <b>e.g. :</b> Stack, Queue, Graph. Tree , Trie , Hash Table
            </Span>
            <Span>
              <b>Hash Table</b>
            </Span>
            <Span>It can be linear as well as non linear.</Span>
          </>
        ),
      },
    },
  },
  algo: {
    title: "Algorithms",
    types: {
      sort: {
        title: "Sorting",
        types: [],
      },
      search: {
        title: "Searching",
        types: [],
      },
      Complexity: {
        title: "Complexity",
        types: [],
      },
      tradeOf: {
        title: "Space Time Trade Off",
        types: [],
      },
      recursive: {
        title: "Recursion",
        types: [],
      },
      "divide&Conquer": {
        title: "Divide & Conquer",
        types: [],
      },
      greedy: {
        title: "Greedy",
        types: [],
      },
      dp: {
        title: "Dynamic Programming",
        types: [],
      },
      bruteForce: {
        title: "Brute Force",
        types: [],
      },
      backtracking: {
        title: "Backtracking",
        types: [],
      },
      branchAndBound: {
        title: "Branch And Bound",
        types: [],
      },
      randomized: {
        title: "Randomized",
        types: [],
      },
    },
  },
  interview: {
    title: "Interview Questions",
    types: {
      amazon: {
        title: "Amazon",
      },
      paytm: {
        title: "Paytm",
      },
      cred: {
        title: "CRED",
      },
      vmware: {
        title: "Vmware",
      },
      turing: {
        title: "Turing",
      },
      stewards: {
        title: "Stewards",
      },
      inuvest: {
        title: "Inuvest",
      },
      nex2Me: {
        title: "Nex2Me",
      },
      pracify: {
        title: "Pracify ( Mauka )",
      },
      appTown: {
        title: "App Town",
      },
    },
    content:
      "Atmost there will be four rounds , the second round will be based on your development skills , experience, projects and code quality. Last two will be based upon hr and they will be similar to the second round.",
  },
  //
  leetcode: {
    title: "Leetcode Questions (1008)",
    types: {
      q1: {
        title: "Q1. Two Sum",
      },
      q2: {
        title: "Q2. Add Two Numbers",
      },

      q3: {
        title: "Q3: Longest Substring Without Repeating Characters",
      },
      q4: {
        title: "Q4: Median Of Two Sorted Arrays",
      },
      q5: {
        title: "Q5: LPS",
      },
      q6: {
        title: "Q6: ZigZag Conversion",
      },
      q7: {
        title: "Q7: Reverse Integer",
      },
      q8: {
        title: "Q8: ATOI",
      },
      q9: {
        title: "Q9: Palindrome",
      },
      q10: {
        title: "Q10. Regular Expression Matching",
      },
      q11: {
        title: "Q11: Container With Most Medium Water",
      },
      q12: {
        title: "Q12: Integer To Roman",
      },
      q13: {
        title: "Q13: Roman To Integer",
      },
      q14: {
        title: "Q14: Longest Common Prefix",
      },
      q15: {
        title: "Q15: 3Sum",
      },
      q16: {
        title: "Q16 : 3SumClosest",
      },
      q17: {
        title: "Q17: Letter Combinations Of A PhoneNumber",
      },
      q18: {
        title: "Q18: 4Sum",
      },
      q19: {
        title: "Q19: Remove Nth Node From End of List",
      },
      q20: {
        title: "Q20: Valid Parenthesis",
      },
      q21: {
        title: "Q21: Merge Two Sorted Lists",
      },
      q22: {
        title: "Q22: Generate Parentheses",
      },
      q23: {
        title: "Q23: Merge K Sorted Lists",
      },
      q24: {
        title: "Q24: Swap Nodes In Pairs",
      },
      q25: {
        title: "Q25: Reverse Nodes in k-Group",
      },
      q26: {
        title: "Q26: Remove Duplicates from Sorted Array.",
      },
      q27: {
        title: "Q27: Remove Element",
      },
      q28: {
        title: "Q28: Implement strStr()",
      },
      q29: {
        title: "Q29: Divide Two Integers",
      },
      q30: {
        title: "Q30: Substring with Concatenation of All Words",
      },
      q31: {
        title: "Q31: Next Permutation",
      },
      q32: {
        title: "Q32: Longest Valid Parentheses",
      },
      q33: {
        title: "Q33: Search in Rotated Sorted Array",
      },
      q34: {
        title: "Q34: Find First and Last Position of Element in Sorted Array",
      },
      q35: {
        title: "Q35: Search Insert Position",
      },
      q36: {
        title: "Q36: Valid Sudoku",
      },
      q37: {
        title: "Q37: Sudoku Solver",
      },
      q38: {
        title: "Q38: Count And Say",
      },
      q39: {
        title: "Q39: Combination Sum",
      },
      q40: {
        title: "Q40: Combination Sum 2",
      },
      q41: {
        title: "Q41: Missing Positive",
      },
      q42: {
        title: "Q42: Trapping Rain Water",
      },
      q43: {
        title: "Q43: Multiply Strings",
      },
      q44: {
        title: "Q44: Wildcard Matching",
      },
      q45: {
        title: "Q45: Jump Game 2",
      },
      q46: {
        title: "Q46: Permutations",
      },
      q47: {
        title: "Q47: Permutations 2",
      },
      q48: {
        title: "Q48: Rotate Image",
      },
      q49: {
        title: "Q49: Group Anagrams",
      },
      q50: {
        title: "Q50: Pow(x,n)",
      },
      q51: {
        title: "Q51: N-Queens",
      },
      q52: {
        title: "Q52: N-Queen’s 2",
      },
      q53: {
        title: "Q53: Maximum Subarray",
      },
      q54: {
        title: "Q54: Spiral Matrix",
      },
      q55: {
        title: "Q55: Jump Game",
      },
    },
  },
};

// at algorithms also include its characteristics
