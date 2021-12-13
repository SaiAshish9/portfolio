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
                <Span>
                  e.g. : Array (static), Linked List (dynamic), Stack (dynamic),
                  Queue (dynamic), etc.
                </Span>
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
                        // sort((a,b)=>a-b)
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
                                        data[i] = data[i - 1]F
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
      del self.head
      return
    else:
      temp = self.head
      while temp.next.next is not None:
        temp = temp.next
      last = temp.next
      temp.next = None
      del last

  def display(self):
    temp = self.head
    while temp is not None:
      print(temp.data,end =' ')
      temp = temp.next
    print('')

  def get(self,index):
    if self.head is None:
      return
    elif index >= self.count():                  
      return
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
    if self.head is None or index > self.count  (): 
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
l.pop()
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
                        2 4 
                        Count: 2
                        Get (Index 1): None
                        Insert: 
                        2 7 4 
                        Enqueue: 
                        9 2 7 4 
                        Delete: 
                        9 7 4 
                        Dequeue: 
                        7 4  
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
  if (this->head == nullptr) {
    return;
   } else if(this->head->next == nullptr){
    this->head = nullptr;
    return;
   } else {
    Node* temp = this->head;
    while (temp->next->next) {
      temp = temp->next;
    }
    Node* last = temp->next;
    temp->next = nullptr;
    delete last;
  }
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
                        9 8 
                        Count: 2
                        Get (Index 1): 8
                        Insert: 
                        9 8 9 
                        Delete: 
                        9 8 
                        Enqueue: 
                        8 9 8 
                        Dequeue: 
                        9 8 
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
                        class Node{
                          constructor(data){
                            this.data = data
                            this.next = null
                          }
                        }
                        
                        class CustomStack{
                          
                          constructor(){
                            this.top = null
                          } 
                        
                          isEmpty(){
                            return this.top === null
                          }
                        
                          push(element){
                          let temp = new Node(element)
                          if(temp == null){
                            console.log("Stack Overflow")
                            return
                          }
                          temp.next = this.top
                          this.top = temp
                          }
                        
                          peek(){
                            if(this.isEmpty()){
                              console.log("Stack Underflow");
                             return -1
                            }else{
                              return this.top.data       
                            }
                          }
                        
                          pop(){
                            if(this.isEmpty()){
                              console.log("Stack Underflow");
                              return;
                            }
                            this.top = this.top.next;
                          }
                        
                          display(){
                             if(this.isEmpty()){
                               console.log("Stack Underflow")
                             }else{
                               let temp = this.top
                               let output = ""
                               while(temp !== null){
                                 output += temp.data + " "
                                 temp = temp.next
                               }
                               console.log(output)
                             }
                          }
                        
                        }
                        
                        const cs = new CustomStack()
                        console.log("Custom Stack Operations:")
                        
                        console.log("1. Push: ")
                        cs.push(10)
                        cs.push(9)
                        cs.display()
                        console.log("2. Pop: ")
                        cs.pop()
                        cs.display()
                        console.log("3. Peek: " + cs.peek())
                        console.log("4. IsEmpty: " + cs.isEmpty())                        
                      `,
                        output: `
                        Custom Stack Operations:
                        1. Push: 
                        9 10 
                        2. Pop: 
                        10 
                        3. Peek: 10
                        4. IsEmpty: false
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
                      Java: {
                        code: `
                      import java.util.*;
import java.io.*;
 
public class Main {
    public static void main(String args[])
    {
        Stack<Integer> stack = new Stack<Integer>();
        stack.push(10);
        stack.push(15);
        stack.push(30);
        stack.push(20);
        stack.push(5);
        System.out.println("Initial Stack: " + stack);
        System.out.println("Pop: "
                           + stack.pop());
        System.out.println("Peek: "
                           + stack.peek());
        System.out.println("Search: "
                           + stack.search(30));
        System.out.println("Stack after pop operation "
                           + stack);
    }
}                     
                      `,
                        output: `Initial Stack: [10, 15, 30, 20, 5]
                      Pop: 5
                      Peek: 20
                      Search: 2
                      Stack after pop operation [10, 15, 30, 20]`,
                      },
                      Python: {
                        code: `from queue import LifoQueue

stack = LifoQueue(maxsize=3)
print(stack.qsize())
stack.put('a')
stack.put('b')
stack.put('c')
print("Full: ", stack.full())
print("Size: ", stack.qsize())
print('Elements popped from the stack')
print(stack.get())
print(stack.get())
print(stack.get())
print("Empty: ", stack.empty())
                      `,
                        output: `
                      0
Full:  True
Size:  3
Elements popped from the stack
c
b
a
Empty:  True
                      `,
                      },
                      "C++": {
                        code: `
                      #include <iostream>
#include <stack>
using namespace std;
int main() {
    stack<int> stack;
    stack.push(21);
    stack.push(22);
    stack.push(24);
    stack.push(25);
     
    stack.pop();
    stack.pop();

    while (!stack.empty()) {
        cout << stack.top() << " ";
        stack.pop();
    }
    cout << endl;
    return 0;
}                      `,
                        output: `22 21`,
                      },
                      Kotlin: {
                        code: `
                        import java.util.*

object Main {
    @JvmStatic
    fun main(args: Array<String>) {
        val stack = Stack<Int>()
        stack.push(10)
        stack.push(15)
        stack.push(30)
        stack.push(20)
        stack.push(5)
        println("Initial Stack: $stack")
        println(
            "Pop: " +
                    stack.pop()
        )
        println(
            "Peek: " +
                    stack.peek()
        )
        println(
            "Search: " +
                    stack.search(30)
        )
        println(
            "Stack after pop operation " +
                    stack
        )
    }
}
                        `,
                        output: `Initial Stack: [10, 15, 30, 20, 5]
                      Pop: 5
                      Peek: 20
                      Search: 2
                      Stack after pop operation [10, 15, 30, 20]`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Queue (FIFO) :</b>
                </Span>
                <Span>
                  Various operations are performed in the order of First In
                  Fisrt Out (FIFO). It's used in breadth first search which is
                  used for branch and bound algorithm.
                </Span>
                <Span>
                  Example: people organised in the form of line for passport
                  verification.
                </Span>
                <b>Implementation</b>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                      class Node{
                        constructor(data){
                          this.data = data
                          this.next = null
                        }
                      }
                      
                      // const MAX_SIZE = 1000
                      // SIZE === MAX_SIZE - 1
                      // -> stack overflow 
                      
                      class CustomQueue{
                        
                        constructor(){
                          this.front = null
                          this.rear = null
                        } 
                      
                        isEmpty(){
                          return this.front === null
                        }
                      
                        enqueue(data){
                          let temp = new Node(data);
                            
                          if(temp === null){
                            console.log("Stack Overflow")
                            return
                          }
                      
                          if (this.isEmpty()) {
                            this.front = this.rear = temp;
                            return;
                          }
                          this.rear.next = temp;
                          this.rear = temp;
                        }
                      
                       dequeue(){
                           if(this.isEmpty()){
                             console.log("Stack Underflow")
                             return
                           }
                           let temp = new Node()
                           temp = this.front;
                           this.front = this.front.next;
                           if (this.front == null)
                            this.rear = null;
                       }
                      
                       display(){
                        let temp = this.front
                        let output = ""
                        if(this.isEmpty()){
                             console.log("Stack Underflow")
                             return
                        }
                        while(temp !== null){
                         output += temp.data + " "
                         temp = temp.next
                        }
                        console.log(output)
                       }
                      
                      }
                      
                      const cq = new CustomQueue()
                      console.log("Custom Queue Operations:")
                      
                      console.log("1. Enqueue: ")
                      cq.enqueue(9)
                      cq.enqueue(7)
                      cq.display()
                      console.log("2. Dequeue: ")
                      cq.dequeue()
                      cq.display()
                      console.log("3. IsEmpty: " + cq.isEmpty())                      
                      `,
                        output: `
                      Custom Queue Operations:
1. Enqueue: 
9 7 
2. Dequeue: 
7 
3. IsEmpty: false
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
                      Java: {
                        code: `
                      import java.util.*;
 
public class Main {
 
    public static void main(String[] args)
    {
        Queue<Integer> q
            = new LinkedList<>();

        Queue<Integer> q1
            = new PriorityQueue<>();
        
        for (int i = 0; i < 5; i++)
            q.add(i);
 
        System.out.println("Elements of queue "
                           + q);
        int removedele = q.remove();
        System.out.println("removed element-"
                           + removedele);
 
        System.out.println(q);
        int head = q.peek();
        System.out.println("head of queue-"
                           + head);

        int size = q.size();
        System.out.println("Size of queue-"
                           + size);
    }
}
                      `,
                        output: `
                      Elements of queue [0, 1, 2, 3, 4]
removed element-0
[1, 2, 3, 4]
head of queue-1
Size of queue-4
                      `,
                      },
                      Python: {
                        code: `from collections import deque
 
q = deque()
 
q.append('a')
q.append('b')
q.append('c')
 
print(q)
print(q.popleft())
print(q.popleft())
print(q.popleft())
 
print(q)
                      `,
                        output: `
                      deque(['a', 'b', 'c'])
a
b
c
deque([])
                      `,
                      },
                      "C++": {
                        code: `
                      #include <iostream>
#include <queue>
  
using namespace std;
  
void display(queue<int> q)
{
    queue<int> g = q;
    while (!g.empty()) {
        cout << g.front() << ' ';
        g.pop();
    }
    cout << endl;
}
  
int main()
{
    queue<int> q;
    q.push(10);
    q.push(20);
    q.push(30);
  
    cout << "The queue gquiz is : ";
    display(q);
  
    cout << "size() : " << q.size() << endl;
    cout << "front() : " << q.front() << endl;
    cout << "back() : " << q.back() << endl;
    cout << "pop()";
    q.pop();
    cout << endl;
    display(q);
  
    return 0;
}
                     `,
                        output: `
                     The queue gquiz is : 10 20 30 
size() : 3
front() : 10
back() : 30
pop()
20 30 
                     `,
                      },
                      Kotlin: {
                        code: `import java.util.*

                        object Main {
                            @JvmStatic
                            fun main(args: Array<String>) {
                                val q: Queue<Int> = LinkedList()
                                val q1: Queue<Int> = PriorityQueue()
                                for (i in 0..4) q.add(i)
                                println(
                                    "Elements of queue " +
                                            q
                                )
                                val removedele = q.remove()
                                println(
                                    "removed element-" +
                                            removedele
                                )
                                println(q)
                                val head = q.peek()
                                println(
                                    "head of queue-" +
                                            head
                                )
                                val size = q.size
                                println(
                                    "Size of queue-" +
                                            size
                                )
                            }
                        }`,
                        output: `
                      Elements of queue [0, 1, 2, 3, 4]
removed element-0
[1, 2, 3, 4]
head of queue-1
Size of queue-4
                      `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Priority Queue:</b>
                </Span>
                <Span>
                  In this type of queue, every item has a associated priority
                  and an element with high priority will be dequeued first. If
                  they both have the same priority then order will be
                  considered. *Priority will be considered during insertion
                  which helps to easily remove a element from the queue.
                </Span>
                <Span>Applications: Dijkstra, Prim's, etc.</Span>
                <b>Utilization:</b>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                      class Element{
                        constructor(ele,priority){
                          this.data = ele
                          this.priority = priority
                        }
                      }
                      
                      class PriorityQueue{
                         constructor()
                          {
                              this.items = [];
                          }
                      
                          enqueue(ele,priority){
                          var qe = new Element(ele, priority);
                          var contain = false;
                          for (var i = 0; i < this.items.length; i++) {
                              if (this.items[i].priority > qe.priority) {
                                  this.items.splice(i, 0, qe);
                                  // insertion
                                  contain = true;
                                  break;
                              }
                          }
                          if (!contain) {
                              this.items.push(qe);
                          }
                          }
                      
                          dequeue(){
                          if (this.isEmpty())
                              return "Underflow";
                          // deletion from front
                          return this.items.shift();
                          }
                           
                          display(){
                          var str = "";
                          for (var i = 0; i < this.items.length; i++)
                              str += this.items[i].data + " ";
                          // reduce 
                          console.log(str);
                          }
                      
                          isEmpty(){
                          return this.items.length == 0;
                          }
                      
                          front(){
                          if (this.isEmpty())
                              return "No elements in Queue";
                          return JSON.stringify(this.items[0]);
                          }
                      
                          rear(){
                          if (this.isEmpty())
                              return "No elements in Queue";
                          return JSON.stringify(this.items[this.items.length - 1]);
                          }
                      
                      }
                      
                      const pq = new PriorityQueue()
                      console.log("Priority Queue Operations: ")
                      console.log("Enqueue: ")
                      pq.enqueue(9)
                      pq.enqueue(8)
                      pq.display()
                      console.log("Dequeue: ")
                      pq.dequeue()
                      pq.display()
                      console.log("Front: " + pq.front())
                      console.log("Rear: " + pq.rear())
                      console.log("isEmpty: " + pq.isEmpty())                      
                      `,
                        output: `
                      Priority Queue Operations: 
Enqueue: 
9 8 
Dequeue: 
8 
Front: {"data":8}
Rear: {"data":8}
isEmpty: false
                      `,
                      },
                      Java: {
                        code: `
                      import java.util.*;
                      public class Main {
                        public static void main(String[] args)
                        {
                              PriorityQueue<Integer> pq = new PriorityQueue<Integer>();
                              pq.add(10);
                              pq.add(20);
                              pq.add(15);
                              System.out.print(pq.peek() + " ");
                              System.out.print(pq.poll() + " ");
                              System.out.print(pq.peek()+ " ");
                              pq.remove(20);
                              Iterator it = pq.iterator();
                        
                              while (it.hasNext()) {
                                  System.out.print(it.next() + " ");
                              }
                      
                              PriorityQueue<Integer> maxPQ = new PriorityQueue<>(Collections.reverseOrder()); 
                              PriorityQueue<Integer> maxPQ1 = new PriorityQueue<>((a,b) -> b - a); 
                              PriorityQueue<Integer> maxPQ2 = new PriorityQueue<>((a,b) -> b.compareTo(a)); 
                      
                              PriorityQueue<Integer> pq1 = new PriorityQueue<Integer> (
                              new Comparator<Integer> () {
                              public int compare(Integer a, Integer b) {
                             return b - a;
                             }
                        }
                      ); 
                            pq1.add(20);
                            pq1.add(30);
                            Iterator it1 = pq1.iterator();
                                System.out.println();
                              while (it1.hasNext()) {
                                  System.out.print(it1.next() + " ");
                              }
                        }
                      }                      
                      `,
                        output: `
                      10 10 15 15 
30 20
                      `,
                      },
                      Python: {
                        code: `from queue import PriorityQueue
pq = PriorityQueue()
pq.put((2, "A"))
pq.put((3, "B"))
pq.put((1, "C"))
pq.put((4, "D"))
while pq:
     print(pq.get())
pq.pop()

                      `,
                        output: `
(1, 'C')
(2, 'A')
(3, 'B')
(4, 'D')
                      `,
                      },
                      "C++": {
                        code: `
                      #include <iostream>
#include <queue>
#include <bits/stdc++.h>

using namespace std;

template<class T>
void display(T& q)
{
    while (!q.empty())
    {
        cout << q.top() << endl;
        q.pop();
    }
}
 
struct CustomCompare
{
    bool operator()(const int& lhs, const int& rhs)
    {
        return lhs < rhs;
    }
};

int main()
{
	priority_queue<int> pq;
  priority_queue<int,vector<int>,greater<int>> pq1;                      
  priority_queue<int,vector<int>, CustomCompare> pq2;

	pq.push(10);
	pq.push(30);
	pq.push(20);
	pq1.push(5);
	pq1.push(1);
	cout << "size() : " << pq.size() << endl;
	cout << "top() : " << pq.top() << endl;
	cout << "pop() : " << endl;
  pq.pop();
  display(pq);
  display(pq1);
  pq2.push(9);
  pq2.push(8);
  display(pq2);
	return 0;
}
                      `,
                        output: `
                      size() : 3
top() : 30
pop() : 
20
10
1
5
9
8
                      `,
                      },
                      Kotlin: {
                        code: `import java.util.PriorityQueue

                        fun main(args: Array<String>) {
                            val nums: PriorityQueue<Int> = PriorityQueue<Int>()
                        
                            // Add items (enqueue)
                            nums.add(800)
                            nums.add(50)
                            nums.add(200)
                            nums.add(550)
                        
                            println("peek: " + nums.peek())
                        
                            // Remove items (dequeue)
                            while (!nums.isEmpty()) {
                                println(nums.remove())
                            }
                        }`,
                        output: `peek: 50
                        50
                        200
                        550
                        800
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Circular Queue:</b>
                </Span>
                <Span>
                  It's similar to a circular linked list which is used to avoid
                  memory wastage. We make of two pointers: front and rear
                  instead of one which is used at circular singly linked list
                </Span>
                <Span>
                  <b>Implementation</b>
                </Span>
                <span>(a) Without using mod operator:</span>
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
                      
                      class CircularQueue {
                      
                          constructor() {
                              this.front = null
                              this.rear = null
                          }
                      
                          isEmpty() {
                              return this.front === null
                          }
                      
                          enqueue(data) {
                              let temp = new Node(data);
                      
                              if (temp === null) {
                                  console.log("Stack Overflow")
                                  return
                              }
                      
                              if (this.isEmpty()) {
                                  this.front = temp;
                              } else {
                                  this.rear.next = temp
                              }
                              this.rear = temp;
                              this.rear.next = this.front;
                          }
                      
                          dequeue() {
                              if (this.isEmpty()) {
                                  console.log("Stack Underflow")
                                  return
                              }
                              let value = null
                              if (this.front === this.rear) {
                                  value = this.front.data
                                  this.front = null
                                  this.rear = null
                              } else {
                                  let temp = this.front
                                  value = temp.data
                                  this.front = this.front.next
                                  this.rear.next = this.front
                              }
                              return value
                          }
                      
                          display() {
                              let temp = this.front
                              let output = ""
                              if (this.isEmpty()) {
                                  console.log("Stack Underflow")
                                  return
                              }
                              if (temp.next == temp) {
                                  output = temp.data
                              } else {
                                  while (temp.next != this.front) {
                                      output += temp.data + " "
                                      temp = temp.next
                                  }
                                  output += temp.data
                              }
                              console.log(output)
                          }
                      
                      }
                      
                      const cq = new CircularQueue()
                      console.log("Circular Queue Operations:")
                      
                      console.log("1. Enqueue: ")
                      cq.enqueue(9)
                      cq.enqueue(7)
                      cq.display()
                      console.log("2. Dequeue: ")
                      cq.dequeue()
                      cq.display()
                      console.log("3. IsEmpty: " + cq.isEmpty())                    
                      `,
                        output: `
                        Circular Queue Operations:
                        1. Enqueue: 
                        9 7 
                        2. Dequeue: 
                        7 
                        3. IsEmpty: false
                      `,
                      },
                    },
                  }}
                />
                <span>(b) Using mod operator:</span>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class CustomQueue{
    
                          constructor(max_size){
                             this.max_size = max_size
                             this.queue = new Array(max_size).fill(null)
                             this.front = this.rear = -1       
                          }
                        
                          isEmpty(){
                            return this.front === -1
                          }
                        
                          enqueue(data){
                            if ((this.rear + 1) % this.max_size === this.front){
                              console.log("The circular queue is full\n")
                            }else if(this.isEmpty()){
                              this.front = 0
                              this.rear = 0
                              this.queue[this.rear] = data
                            }else{
                              this.rear = (this.rear + 1) % this.max_size
                              this.queue[this.rear] = data
                            }
                          }
                        
                        
                          dequeue(){
                            let temp = null
                            if (this.isEmpty()){
                              console.log("The circular queue is empty")
                            }
                            else if(this.front === this.rear){
                              temp = this.queue[this.front]
                              this.front = -1
                              this.rear = -1
                              return temp
                            }
                            else{
                              temp = this.queue[this.front]
                              this.front = (this.front + 1) % this.max_size
                              return temp
                            }
                          }
                        
                          display(){
                             let output = ""
                             if(this.isEmpty()){
                              console.log("No element in the circular queue")
                             }else if(this.rear >= this.front){
                              for(let i=this.front;i<=this.rear;i++){
                                 output += this.queue[i] + " "
                              }
                             }else{
                              for(let i=this.front;i<this.max_size;i++){
                                 output += this.queue[i] + " "
                              }   
                              for(let i=0;i<=this.rear;i++){
                                 output += this.queue[i] + " "
                              }   
                             }
                             console.log(output)
                          }
                        
                        }
                        
                        const cq = new CustomQueue(5); 
                        console.log("Circular Queue Operations:")
                        console.log("1. Enqueue: ")
                        cq.enqueue(9)
                        cq.enqueue(7)
                        cq.display()
                        console.log("2. Dequeue: ")
                        cq.dequeue()
                        cq.display()
                        console.log("3. IsEmpty: " + cq.isEmpty())  
                        `,
                        output: `
                        Circular Queue Operations:
                        1. Enqueue: 
                        9 7 
                        2. Dequeue: 
                        7 
                        3. IsEmpty: false
                      `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Deque:</b>
                </Span>
                <Span>
                  It allows insertion and deletion at both ends of the data
                  structure.
                </Span>
                <b>Utilization:</b>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                      function Deque()
{
 this.stack=new Array();
 this.popback=function(){
  return this.stack.pop();
 }
 this.pushback=function(item){
  this.stack.push(item);
 }
 this.popfront=function(){
  return this.stack.shift();
 }
 this.pushfront=function(item){
  this.stack.unshift(item);
 }
 this.display=function(){
   console.log(this.stack)
 }
}

var deque= new Deque();

deque.pushfront("A");
deque.pushfront("B");
deque.display()
deque.pushback("C");
deque.display()
deque.popfront();
deque.display()
deque.popback();
deque.display()
                      `,
                        output: `
                      [ 'B', 'A' ]
[ 'B', 'A', 'C' ]
[ 'A', 'C' ]
[ 'A' ]
                      `,
                      },
                      Java: {
                        code: `
                      import java.util.*;
public class Main {
	public static void main(String[] args)
	{
		Deque<String> dq
			= new ArrayDeque<String>();
// new LinkedList<String>()

		dq.add("A");
		dq.addFirst("B");
		dq.addLast("C");
    for (Iterator it = dq.iterator();
         it.hasNext();) {
        System.out.print(it.next() + " ");
    }
    System.out.println();
    for (Iterator it = dq.descendingIterator();
         it.hasNext();) {
        System.out.print(it.next() + " ");
    }
    System.out.println();
    System.out.println(dq);
    System.out.println(dq.pop());
    System.out.println(dq.poll());
    System.out.println(dq);
    System.out.println(dq.pollFirst());
    System.out.println(dq.pollLast());
    dq.clear();
	  System.out.println(dq);
// Those methods retrieve the first element 
// and remove it from the list. The difference 
// between poll() and pop() is that pop will
// throw NoSuchElementException() on empty list, 
// whereas poll returns null.

	}
}
                      `,
                        output: `
                      B A C 
C A B 
[B, A, C]
B
A
[C]
C
null
[]
                      `,
                      },
                      Python: {
                        code: `import collections
de = collections.deque([9,7,8,4])
de.append(4)
print(de)
de.appendleft(6)
print(de)
de.pop()
print(de)
de.popleft()
print(de)
print(de.index(4,2,5))
de.insert(4,3)
print (de)
print (de.count(3))
de.remove(3)
de.extend([4,5,6])
print(de)
de.extendleft([7,8,9])
print(de)
de.rotate(-3)
print(de)
de.reverse()
print (de)
                      `,
                        output: `
                      deque([9, 7, 8, 4, 4])
deque([6, 9, 7, 8, 4, 4])
deque([6, 9, 7, 8, 4])
deque([9, 7, 8, 4])
3
deque([9, 7, 8, 4, 3])
1
deque([9, 7, 8, 4, 4, 5, 6])
deque([9, 8, 7, 9, 7, 8, 4, 4, 5, 6])
deque([9, 7, 8, 4, 4, 5, 6, 9, 8, 7])
deque([7, 8, 9, 6, 5, 4, 4, 8, 7, 9])
                      `,
                      },
                      "C++": {
                        code: `
                      #include <iostream>
#include <deque>

using namespace std;

void display(deque <int> q)
{
	deque <int> :: iterator it;
	for (it = q.begin(); it != q.end(); ++it)
		cout << *it << '\t';
	cout << '\n';
}

int main()
{
	deque <int> dq;
	dq.push_back(9);
	dq.push_front(8);
	dq.push_back(6);
	dq.push_front(7);
	display(dq);

  cout << "Deque Operations: " << endl;
	cout << "size() : " << dq.size()<< endl;
	cout << "max_size() : " << dq.max_size()<< endl;
	cout << "at(2) : " << dq.at(2)<< endl;
	cout << "front() : " << dq.front()<< endl;
	cout << "back() : " << dq.back()<< endl;
	cout << "pop_front() : "<< endl;
	dq.pop_front();
	display(dq);
	cout << "pop_back() : "<< endl;
	dq.pop_back();
	display(dq);

	return 0;
}
                      `,
                        output: `
                      7   8   9   6
Deque Operations: 
size() : 4
max_size() : 4611686018427387903
at(2) : 9
front() : 7
back() : 6
pop_front() : 
8   9   6
pop_back() : 
8   9
                      `,
                      },
                      Kotlin: {
                        code: `import java.util.*

                        object Main {
                            @JvmStatic
                            fun main(args: Array<String>) {
                                val dq: Deque<String> = ArrayDeque()
                                // new LinkedList<String>()
                                dq.add("A")
                                dq.addFirst("B")
                                dq.addLast("C")
                                run {
                                    val it: Iterator<*> = dq.iterator()
                                    while (it.hasNext()) {
                                        print(it.next().toString() + " ")
                                    }
                                }
                                println()
                                val it: Iterator<*> = dq.descendingIterator()
                                while (it.hasNext()) {
                                    print(it.next().toString() + " ")
                                }
                                println()
                                println(dq)
                                println(dq.pop())
                                println(dq.poll())
                                println(dq)
                                println(dq.pollFirst())
                                println(dq.pollLast())
                                dq.clear()
                                println(dq)
                                // Those methods retrieve the first element 
                                // and remove it from the list. The difference 
                                // between poll() and pop() is that pop will
                                // throw NoSuchElementException() on empty list, 
                                // whereas poll returns null.
                            }
                        }`,
                        output: `
                      B A C 
                      C A B 
                      [B, A, C]
                      B
                      A
                      [C]
                      C
                      null
                      []
                      `,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Non Linear",
            content: (
              <>
                <Span>
                  In <b>non linear data structure</b>, elements are not arranged
                  in a sequential way hence they cannot be traveresed in a
                  single run as multiple levels are involved.
                </Span>
                <Span>Applications: ML, AI , etc.</Span>
                <Span>e.g. Trees, Graph and Tries etc.</Span>
                <Span>
                  <b>Tree</b>
                </Span>
                <Span>
                  It consists of elements organised in a hierarchical way such
                  that there can be only one connection in between two elements.
                </Span>
                <Span>Let n => number of nodes</Span>
                <Span>
                  <b>Catalian Number:</b> 2nCn/(n+1) or (2n)!/(n+1)
                </Span>
                <Span>
                  <b>Terminology:</b>
                </Span>
                <Span>
                  <b>Root </b>: The first single node from where the tree
                  originates.
                </Span>
                <Span>
                  <b>Edge </b>: The connecting link between any two nodes is
                  called as an edge. NUmber of edges = n-1
                </Span>
                <Span>
                  <b>Parent </b>: The node which has a branch from it to any
                  other node
                </Span>
                <Span>
                  <b>Child </b>: The node which is a descendant of some node
                </Span>
                <Span>
                  <b>Siblings: </b>Nodes which belong to the same parent
                </Span>
                <Span>
                  <b>Degree of a node: </b>total number of children of that
                  node.
                </Span>
                <Span>
                  <b>Degree of a tree: </b>highest degree of a node among all
                  the nodes in the tree.
                </Span>
                <Span>
                  <b>Internal (non-terminal / non-leaf) node: </b>node which has
                  at least one child.
                </Span>
                <Span>
                  <b>External (terminal / leaf) node: </b>the node which does
                  not have any child
                </Span>
                <Span>
                  <b>Level: </b>each step from top to bottom ( 0 to height of
                  tree )
                </Span>
                <Span>
                  <b>Height of a node: </b>Total number of edges that lies on
                  the longest path from deepest leaf node to a particular node
                </Span>
                <Span>
                  <b>Height of a tree: </b>height of root node.
                </Span>
                <Span>
                  <b>Depth of a tree: </b> It's same as level of the tree and is
                  computed with the help of edges that lie between root node to
                  that particular node.
                </Span>
                <Span>
                  The root node has depth zero, leaf nodes have height zero, and
                  a tree with only a single node (hence both a root and leaf)
                  has depth and height zero.
                </Span>
                <Span>
                  <b>Subtree: </b>each child from a node forms another tree
                  recursively.
                </Span>
                <Span>
                  <b>Forest: </b>collection of trees obtained from omitting the
                  root.
                </Span>
                <Span>
                  <b>Types:</b>
                </Span>
                {/* https://www.educba.com/types-of-trees-in-data-structure/ */}
                <Span>
                  <b>1. General Tree</b>
                </Span>
                <p>
                  If no constraint is placed on the tree’s hierarchy, a tree is
                  called a general tree
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class Node {
                          constructor(val) {
                            this.data = val;
                            this.left = null;
                            this.right = null;
                            // left1 
                            // right1
                            // we can add more links as
                            // well in case of general tree
                          }
                        }
                      
                      function inorder(root){
                        if(root!=null){
                          inorder(root.left)
                          console.log(root.data)
                          inorder(root.right)
                        }
                      }
                      
                      let root = null;
                      root = new Node(1);
                      root.left = new Node(2);
                      root.right = new Node(3);
                      root.left.left = new Node(4);
                      inorder(root)                      
                        `,
                        output: `
                        4
2
1
3
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>2. Binary Tree</b>
                </Span>
                <Span>
                  The binary tree is the kind of tree in which most two children
                  can be found for each parent and no constraints are applied at
                  simple binary tree.
                </Span>
                <Span>
                  <b>Types:</b>
                </Span>
                <Span>a. Extended Binary Tree</Span>
                <p>
                  Extended binary tree is a type of binary tree in which all the
                  null sub tree of the original tree are replaced with special
                  nodes called external nodes whereas other nodes are called
                  internal nodes
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `class Node
                        {
                            constructor()
                            {
                                this.key = 0;
                                this.left = null;
                                this.right = null;
                            }
                        };
                         
                        function createNode(key)
                        {
                            var temp = new Node();
                            temp.key = key;
                            temp.left = temp.right = null;
                            return (temp);
                        }
                        
                        function inorder(root){
                          traverse(root.left);
                          console.log(root.key + " ");
                          traverse(root.right);
                        }
                         
                        function traverse(root)
                        {
                            if (root != null)
                              inorder(root)
                            else
                            {
                                root = createNode(-1);
                                console.log(root.key + " ");
                            }
                        }
                         
                        const root = createNode(1);
                        root.left = createNode(2);
                        root.right = createNode(3);
                        root.left.left = createNode(5);
                        root.right.right = createNode(4);
                        traverse(root);`,
                        output: `-1 
                        5 
                        -1 
                        2 
                        -1 
                        1 
                        -1 
                        3 
                        -1 
                        4 
                        -1 `,
                      },
                    },
                  }}
                />
                <Span>b. Full Binary Tree</Span>
                <Span>
                  In this type of tree, all internal nodes will have two
                  children
                </Span>
                <Span>c. Complete Binary Tree</Span>
                <Span>
                  Binary Tree is a Complete Binary Tree if all the levels are
                  completely filled except possibly the last level and the last
                  level has all keys as left as possible{" "}
                </Span>
                <Span>d. Perfect Binary Tree</Span>
                <Span>
                  A Binary tree is a Perfect Binary Tree in which all the
                  internal nodes have two children and all leaf nodes are at the
                  same level.{" "}
                </Span>
                <Span>No. of leaf nodes = No. of internal nodes + 1</Span>
                <Span>e. Balanced Binary Tree</Span>
                <Span>
                  A binary tree is balanced if the height of the tree is O(Log
                  n) where n is the number of nodes. Height of left and right
                  subtree should't differ by 1. e.g. AVL, Red black.They provide
                  O(log n) for insert,search and delete.
                </Span>
                <Span>f. Degenerate(Pathological) Binary Tree</Span>
                <Span>
                  A Tree where every internal node has one child. Such trees are
                  performance-wise same as linked list.
                </Span>
                {/* https://www.educba.com/types-of-trees-in-data-structure/ */}
                {/* https://www.geeksforgeeks.org/binary-tree-set-3-types-of-binary-tree/ */}
                <Span>
                  <b>3. Binary Search Tree</b>
                </Span>
                <Span>
                  Complexity for insertion, deletion and search : O(h) , h :
                  height of bst
                </Span>
                <Span>
                  It's basically a binary tree (degree : 2) with certain
                  constraints. There should be no duplicate nodes present in the
                  tree and also left subtree should always be smaller than right
                  subtree or we can say left child of any parent should be
                  lesser than it and the right child should be greater than it.
                </Span>
                <Span>
                  inorder, preorder, postorder => depth first traversal
                  <br />
                  level order => breadth first traversal
                  <br />
                  Min height => n-1 <br />
                  Max height => ceil(log2(n)) <br />
                  Min nodes -> h+1 <br />
                  Max nodes -> 2^h + 1 <br />
                  Insert, delete, search -> complexity : O(1)
                </Span>
                <Span>
                  <b>Implementation:</b>
                </Span>
                <p>(a) using recursion:</p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class Node {
                          constructor(val) {
                            this.key = val;
                            this.left = null;
                            this.right = null;
                          }
                      }
                                            
                      class BinarySearchTree {
                        constructor(){
                          this.root = null
                        }
                      
                      // we'll make use of binary search till that
                      // desired element is found . After every
                      // iteration, n/2 nodes will be reduced from
                      // search space due to the elimination of desired
                      // subtree ( left or right ). That's why its
                      // called binary search tree.
                      
                        search(key,temp=this.root)
                        {
                          if (temp === null || temp.key === key)
                              return temp;
                          if (temp.key < key)
                             return this.search(key,temp.right);
                          return this.search(key,temp.left);
                        }
                      
                      // we'll find the desired leaf node for 
                      // insertion
                        insert(key)
                        {
                          this.root = this.insertRec(this.root, key);
                        }
                        
                        insertRec(temp, key)
                        {
                          if (temp == null)
                          {
                            temp = new Node(key);
                            return temp;
                          }
                          if (key < temp.key)
                            temp.left = this.insertRec(temp.left, key);
                          else if (key > temp.key)
                            temp.right = this.insertRec(temp.right, key);
                          return temp;
                        }
                        
                        inorder()
                        {
                          this.inorderRec(this.root);
                        }
                      
                        inorderRec(temp)
                        {
                          if (temp != null) {
                            this.inorderRec(temp.left);
                            console.log(temp.key);
                            this.inorderRec(temp.right);
                          }
                        }
                      
                        remove(key){
                          this.root = this.removeRec(this.root,key)
                        }
                      
                      // Deletion can be classified into 3 types depending upon
                      // whether node is present at:
                      // 1. leaf -> simply delete the node
                      // 2. parent with 1 child -> delete & replace it with the child
                      // 3. parent with 2 child -> delete & replace it with inorder 
                      // successor or predecessor
                      
                        removeRec(temp,key)
                        {
                        
                        if (temp == null)
                            return temp;
                      
                        if (key < temp.key)
                            temp.left = this.removeRec(temp.left, key);
                        else if (key > temp.key)
                            temp.right = this.removeRec(temp.right, key);
                        else {
                          if (temp.left == null)
                            return temp.right;
                          else if (temp.right == null)
                            return temp.left;
                          temp.key = this.minValue(temp.right);
                          // inorder successor
                          temp.right = this.removeRec(temp.right, temp.key);
                        }
                        return temp;
                        }
                       
                        minValue(root)
                        {
                          let minv = root.key;
                              while (root.left != null)
                              {
                                  minv = root.left.key;
                                  root = root.left;
                              }
                              return minv;
                        }
                      
                        maxDepth(node=this.root)
                          {
                              if (node == null)
                                  return -1;
                              else
                              {
                                  var lDepth = this.maxDepth(node.left);
                                  var rDepth = this.maxDepth(node.right);
                                  if (lDepth > rDepth)
                                      return (lDepth + 1);
                                   else
                                      return (rDepth + 1);
                              }
                              // O(n^2)
                        }
                        
                        // using recursion, level order 
                        // traversal occupies O(n*n) . That's
                        // why let's solve it ib O(n) using 
                        // queue
                      
                        levelOrderAndMaxDepth(root = this.root)
                        {
                          if(root == null)
                            return;
                          
                          let q = [];
                          let height = -1;
                          q.push(root);
                          while(true)
                          {
                            let nodeCount = q.length;
                            if(nodeCount == 0){
                              console.log({height})
                              break;
                            }
                            height++;
                            let output = ""
                            while(nodeCount > 0)
                            {
                              let node = q[0];
                              output += node.key + " ";
                              q.shift();
                              if(node.left != null)
                                q.push(node.left);
                              if(node.right != null)
                                q.push(node.right);
                              nodeCount--;
                            }
                            console.log(output)
                          }
                        }
                      
                      }
                      
                      const tree = new BinarySearchTree();
                      
                      console.log("Binary Search Tree Operations:")
                      
                      console.log("Insertion: 6, 5, 4, 3, 9, 8, 7")
                      tree.insert(6);
                      tree.insert(5);
                      tree.insert(4);
                      tree.insert(3);
                      tree.insert(9);
                      tree.insert(8);
                      tree.insert(7);
                      console.log("Level Order Traversal (Breadth First Traversal):")
                      tree.levelOrderAndMaxDepth()
                      console.log("Maximum Depth: " + tree.maxDepth())
                      console.log("In-Order Traversal (Depth First Traversal):")
                      tree.inorder();
                      console.log("Search (8):")
                      console.log(tree.search(8))
                      tree.levelOrderAndMaxDepth()
                      console.log("Delete (8): ")
                      tree.remove(8)
                      tree.levelOrderAndMaxDepth()
                      console.log("Maximum Depth: " + tree.maxDepth())
                      tree.inorder();                          
                        `,
                        output: `
                        Binary Search Tree Operations:
                        Insertion: 6, 5, 4, 3, 9, 8, 7
                        Level Order Traversal:
                        6 
                        5 9 
                        4 8 
                        3 7 
                        { height: 3 }
                        Maximum Depth: 3
                        In-Order Traversal:
                        3
                        Binary Search Tree Operations:
                        Insertion: 6, 5, 4, 3, 9, 8, 7
                        Level Order Traversal:
                        6 
                        5 9 
                        4 8 
                        3 7 
                        { height: 3 }
                        Maximum Depth: 3
                        In-Order Traversal:
                        3
                        4
                        Binary Search Tree Operations:
                        Insertion: 6, 5, 4, 3, 9, 8, 7
                        Binary Search Tree Operations:
                        Insertion: 6, 5, 4, 3, 9, 8, 7
                        Level Order Traversal (Breadth First Traversal):
                        6 
                        5 9 
                        4 8 
                        3 7 
                        { height: 3 }
                        Maximum Depth: 3
                        In-Order Traversal (Depth First Traversal):
                        3
                        4
                        5
                        6
                        7
                        8
                        9
                        Search (8):
                        Node {
                          key: 8,
                          left: Node { key: 7, left: null, right: null },
                          right: null
                        }
                        6 
                        5 9 
                        4 8 
                        3 7 
                        { height: 3 }
                        Delete (8): 
                        6 
                        5 9 
                        4 7 
                        3 
                        { height: 3 }
                        Maximum Depth: 3
                        3
                        4
                        5
                        6
                        7
                        9
                        `,
                      },
                    },
                  }}
                />
                <p>(b) inorder traversal using stack and loop:</p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class Node {
                          constructor(val) {
                            this.val = val;
                            this.left = null;
                            this.right = null;
                          }
                      }
                      
                      class BinarySearchTree {
                        constructor(){
                          this.root = null
                        }
                        
                        insert(key)
                        {
                          const node = new Node(key);
                          if(this.root === null){
                            this.root = node;
                            return;
                          }
                          let prev=null;
                          let temp=this.root;
                          while (temp!=null){
                            if(temp.val > key){
                              prev=temp;
                              temp=temp.left;
                            }
                            else if(temp.val < key){
                              prev=temp;
                              temp=temp.right;
                            }
                          }
                          if(prev.val>key)
                            prev.left=node;
                          else prev.right=node;
                        }
                      
                        // depth first traversal
                        
                        inorder(){
                          let temp=this.root;
                          let stack=[];
                          while (temp!=null||stack.length!==0){
                            if(temp!=null){
                              stack.push(temp);
                              temp=temp.left;
                            }
                          else {
                              temp = stack.pop();
                              console.log(temp.val+" ");
                              temp = temp.right;
                          }
                          }
                        }
                      
                      }
                      
                      const tree = new BinarySearchTree();
                      console.log("Binary Search Tree Operations:")
                      tree.insert(9)
                      tree.insert(8)
                      tree.insert(7)
                      tree.inorder()                      
                        `,
                        output: `
                        Binary Search Tree Operations:
7 
8 
9
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>4. AVL (Adelson Velsky and Landis) Tree</b>
                </Span>
                <Span>
                  It's a self balancing binary search tree where difference b/w
                  left and right subtress for every node cannot be more than 1.
                  They are used to improve the cost of operations of skewed bst
                  from O(n) to O(logn)
                </Span>
                <Span>The height of an AVL tree is always O(Logn)</Span>
                Balance factor of a node: (height of left subtree) - (height of
                right tree). It should be between -1 and 1. If it's greater than
                1 then we should consider LL (Left Left) or LR case. Otherwise
                RR or RL case.
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class Node {
                          constructor(d) {
                          this.key = d;
                          this.height = 1;
                          this.left = null;
                          this.right = null;
                          }
                        }
                      
                        // Insertion->
                      
                        // level order traversals
                      
                        // let T1,T2,T3 and T4 be subtrees 
                      
                        // LL case -> right rotate z
                      
                        // before rotation:
                        // z (2)
                        // y--------T4 
                        // x T3
                        // T1 T2 
                      
                        // after rotating z clockwise (right)
                        // y
                        // x--------z
                        // T1 T2  T3 T4
                      
                        // RR case -> left rotate z
                        
                        // before rotation
                        // z (-2)
                        // T1 y
                        // ---T2 x
                        // ---T3 T4
                      
                        // after rotating z anti-clockwise (left)
                        // y 
                        // z      x
                        // T1 T2. T3 T4
                      
                        // LR case -> Left rotate y then right rotate z
                        
                        // before rotation
                        // z
                        // y T4
                        // T1 x
                        // -- T2 T3
                      
                        // after rotating y anti-clockwise (left)
                        // z
                        // x ----T4
                        // y T3
                        // T1 T2
                        // after rotating z clockwise (right)
                        // x
                        // y z
                        // T1 T2 T3 T4
                        
                        // RL case -> Right rotate y then left rotate z
                        // z
                        // T1 -- y
                        //      x T4
                        //      T2 t3
                      
                        // after rotating y clockwise (right)
                        // z
                        // T1 ----x
                        // T2 y
                        // T3 T4
                        // after rotating z anti-clockwise (left)
                        // x
                        // y z
                        // T1 T2 T3 T4
                      
                        // Deletion ->
                        // L1 -> LL        
                        // L0 -> LL or LR 
                        // L-1 -> LR 
                      
                        // R1 -> RL
                        // R0 -> RR or RL
                        // R-1 -> RR
                      
                        class AVLTree {
                          constructor() {
                          this.root = null;
                          }
                      
                          height(N) {
                          if (N == null) return 0;
                          return N.height;
                          }
                      
                          max(a, b) {
                          return a > b ? a : b;
                          }
                      
                          rightRotate(y) {
                          var x = y.left;
                          var T2 = x.right;
                          x.right = y;
                          y.left = T2;
                          y.height = this.max(this.height(y.left),
                          this.height(y.right)) + 1;
                          x.height = this.max(this.height(x.left),
                          this.height(x.right)) + 1;
                          return x;
                          }
                      
                          leftRotate(x) {
                          var y = x.right;
                          var T2 = y.left;
                          y.left = x;
                          x.right = T2;
                          x.height = this.max(this.height(x.left),
                          this.height(x.right)) + 1;
                          y.height = this.max(this.height(y.left),
                          this.height(y.right)) + 1;
                      
                          return y;
                          }
                      
                          getBalance(N) {
                          if (N == null) return 0;
                      
                          return this.height(N.left) - this.height(N.right);
                          }
                      
                          insert(key){
                           this.root = this.insertNode(this.root,key);
                          }
                      
                          insertNode(node, key) {
                          if (node == null) return new Node(key);
                      
                          if (key < node.key)
                          node.left = this.insertNode(node.left, key);
                          else if (key > node.key)
                          node.right = this.insertNode(node.right, key);
                          else return node;
                      
                          node.height =
                            1 + this.max(this.height(node.left),
                              this.height(node.right));
                          var balance = this.getBalance(node);
                      
                      // LL
                          if (balance > 1 && key < node.left.key)
                          return this.rightRotate(node);
                      
                      // RR
                          if (balance < -1 && key > node.right.key)
                            return this.leftRotate(node);
                      
                      // LR
                          if (balance > 1 && key > node.left.key) {
                            node.left = this.leftRotate(node.left);
                            return this.rightRotate(node);
                          }
                      
                      // RL
                          if (balance < -1 && key < node.right.key) {
                            node.right = this.rightRotate(node.right);
                            return this.leftRotate(node);
                          }
                      
                          return node;
                          }
                      
                          preOrder(node=this.root) {
                          if (node != null) {
                            console.log(node.key + " ");
                            this.preOrder(node.left);
                            this.preOrder(node.right);
                          }
                          }
                      
                      // for deletion simple perform bst deletion and perform 
                      // rotation accordingly
                      
                        remove(key){
                         this.root = this.removeNode(this.root,key)
                        }
                      
                        removeNode(head, key)
                          {
                              if (head == null)
                                  return head;
                              if (key < head.key)
                                  head.left = this.removeNode(head.left, key);
                              else if (key > head.key)
                                  head.right = this.removeNode(head.right, key);
                              else
                              {
                                  if ((head.left == null) || (head.right == null))
                                  {
                                      let temp = null;
                                      if (temp == head.left)
                                          temp = head.right;
                                      else
                                          temp = head.left;
                                      if (temp == null)
                                      {
                                          temp = head;
                                          head = null;
                                      }
                                      else 
                                          head = temp; 
                                  }
                                  else
                                  {
                                      let temp = this.minValueNode(head.right);
                                      head.key = temp.key;
                                      // inorder successor
                                      head.right = this.removeNode(head.right, temp.key);
                                  }
                              }
                              if (head == null)
                                  return head;
                              head.height = Math.max(this.height(head.left), this.height(head.right)) + 1;
                              let balance = this.getBalance(head);
                              // LL
                              if (balance > 1 && this.getBalance(head.left) >= 0)
                                  return this.rightRotate(head);
                              // LR
                              if (balance > 1 && this.getBalance(head.left) < 0)
                              {
                                  head.left = this.leftRotate(head.left);
                                  return this.rightRotate(head);
                              }
                              // RR
                              if (balance < -1 && this.getBalance(head.right) <= 0)
                                  return this.leftRotate(head);
                              // RL
                              if (balance < -1 && this.getBalance(head.right) > 0)
                              {
                                  head.right = this.rightRotate(head.right);
                                  return this.leftRotate(head);
                              }
                              return head;
                          }
                      }
                      
                      var tree = new AVLTree();
                      tree.insert(10);
                      tree.insert(20);
                      tree.insert(30);
                      tree.insert(40);
                      tree.insert(50);
                      tree.insert(25);
                      tree.preOrder()
                      console.log("#####")
                      tree.remove(40)
                      tree.preOrder()                      
                        `,
                        output: `
                        30 
                        20 
                        10 
                        25 
                        40 
                        50 
                        #####
                        30 
                        20 
                        10 
                        25 
                        50 
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>5. Red-Black Tree</b>
                </Span>
                <Span>
                  It's a kind of self balancing binary search tree which uses
                  one extra bit for the color of each node instead of its
                  balancing height to ensure that tree remains balanced during
                  insertion and deletion. We make uses of various flags for
                  rotation.
                </Span>
                <Span>
                  Rules: Root will always be black.There are no two adjacent red
                  nodes. Number of black nodes from root to the leaf node will
                  always be the same through any path. Newly inserted node will
                  always be given
                </Span>
                <Span>
                  We need to perform rotation when the parent of current node is
                  red.
                </Span>
                <Span>
                  In the insert operation, we check the color of the uncle to
                  decide the appropriate case. In the delete operation, we check
                  the color of the sibling to decide the appropriate case after
                  bst deletion.
                </Span>
                <p>
                  Red-Black Tree of height h has black-height greater than or
                  equal to h/2. Height less than or equal to 2log2(n+1) <br />
                  Cost Of Operations: <br />
                  Insertion: O(log n) <br />
                  Search: O(log n) <br />
                  Deletion: O(log n)
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Java: {
                        code: `
                        import java.io.*;

                        public class Main
                        {
                          public Node root;
                          public Main()
                          {
                            super();
                            root = null;
                          }
                          class Node
                          {
                            int data;
                            Node left;
                            Node right;
                            char colour;
                            Node parent;
                        
                            Node(int data)
                            {
                              super();
                              this.data = data; 
                              this.left = null; 
                              this.right = null; 
                              this.colour = 'R'; 
                              this.parent = null; 
                            }
                          }
                          Node rotateLeft(Node node)
                          {
                            Node x = node.right;
                            Node y = x.left;
                            x.left = node;
                            node.right = y;
                            node.parent = x; 
                            if(y!=null)
                              y.parent = node;
                            return(x);
                          }
                        
                          Node rotateRight(Node node)
                          {
                            Node x = node.left;
                            Node y = x.right;
                            x.right = node;
                            node.left = y;
                            node.parent = x;
                            if(y!=null)
                              y.parent = node;
                            return(x);
                          }
                        
                        
                          boolean ll = false;
                          boolean rr = false;
                          boolean lr = false;
                          boolean rl = false;
                        
                        
                          Node insertHelp(Node root, int data)
                          {
                            // f is true when RED RED conflict is there.
                            boolean f=false;
                            
                        
                            if(root==null)
                              return(new Node(data));
                            else if(data<root.data)
                            {
                              // find the location and mark f 
                              // true if desired condition 
                              // satisfies
                              // root.left -> root is parent at last
                              root.left = insertHelp(root.left, data);
                              root.left.parent = root;
                              if(root!=this.root)
                              {
                                if(root.colour=='R' && root.left.colour=='R')
                                  f = true;
                              }
                            }
                            else
                            {
                              root.right = insertHelp(root.right,data);
                              root.right.parent = root;
                              if(root!=this.root)
                              {
                                if(root.colour=='R' && root.right.colour=='R')
                                  f = true;
                              }
                            }
                        
                            if(this.ll) 
                            {
                              root = rotateLeft(root);
                              root.colour = 'B';
                              root.left.colour = 'R';
                              this.ll = false;
                            }
                            else if(this.rr) 
                            {
                              root = rotateRight(root);
                              root.colour = 'B';
                              root.right.colour = 'R';
                              this.rr = false;
                            }
                            else if(this.rl) 
                            {
                              root.right = rotateRight(root.right);
                              root.right.parent = root;
                              root = rotateLeft(root);
                              root.colour = 'B';
                              root.left.colour = 'R';
                        
                              this.rl = false;
                            }
                            else if(this.lr) 
                            {
                              root.left = rotateLeft(root.left);
                              root.left.parent = root;
                              root = rotateRight(root);
                              root.colour = 'B';
                              root.right.colour = 'R';
                              this.lr = false;
                            }
                        
                        // red red case
                        // is uncle is black,perform rotation
                            if(f)
                            {
                              if(root.parent.right == root) 
                              {
                                //  uncle -> root.parent.left
                                if(root.parent.left==null || root.parent.left.colour=='B') 
                                {
                                  if(root.left!=null && root.left.colour=='R')
                                    this.rl = true;
                                  else if(root.right!=null && root.right.colour=='R')
                                    this.ll = true;
                                }
                                else 
                                {
                                  root.parent.left.colour = 'B';
                                  root.colour = 'B';
                                  // root cannot be red
                                  if(root.parent!=this.root)
                                    root.parent.colour = 'R';
                                }
                              }
                              else
                              {
                                if(root.parent.right==null || root.parent.right.colour=='B')
                                {
                                  if(root.left!=null && root.left.colour=='R')
                                    this.rr = true;
                                  else if(root.right!=null && root.right.colour=='R')
                                    this.lr = true;
                                }
                                else
                                {
                                  root.parent.right.colour = 'B';
                                  root.colour = 'B';
                                  if(root.parent!=this.root)
                                    root.parent.colour = 'R';
                                }
                              }
                              f = false;
                            }
                            return(root);
                          }
                        
                          public void insert(int data)
                          {
                            if(this.root==null)
                            {
                              this.root = new Node(data);
                              this.root.colour = 'B';
                            }
                            else
                              this.root = insertHelp(this.root,data);
                          }
                          
                          public void inorderTraversal(Node node)
                          {
                            if(node!=null)
                            {
                              inorderTraversal(node.left);
                              System.out.printf("%d ", node.data);
                              inorderTraversal(node.right);
                            }	}
                        
                          public static void main(String[] args)
                          {
                            Main t = new Main();
                            int[] arr = {1,4,6,3,5,7,8,2,9};
                            for(int i=0;i<9;i++)
                            {
                              t.insert(arr[i]);
                          }
                            t.inorderTraversal(t.root);
                        }
                        }
                        Deletion -> https://www.geeksforgeeks.org/red-black-tree-set-3-delete-2/ ( for now )
                        `,
                        output: `
 1 2 3 4 5 6 7 8 9
 `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>6. N-ary (M-way) Tree</b>
                </Span>
                <Span>
                  Multi way trees are used to generate trees with order m, i.e.
                  each tree can contain nodes with maximum m-1 keys and m
                  children.
                </Span>
                <Span>
                  Number of elements = h to (m^h)-1 <br />
                  Height: log_m(n+1) to n
                </Span>
                <b>Basic Structure (Without Driver Code) :</b>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Python: {
                        code: `class node:
    def __init__(self):
        self.count = -1
        self.value = [-1]*(MAX)
        self.child = [None]*(MAX + 1)

def search(val, root, pos):

	if (root == None):
		return None
	else :
		if (searchnode(val, root, pos)):
			return root
		else:
			return search(val, root.child[pos], pos)
	

def searchnode(val, n, pos):
	if (val < n.value[1]):
		pos = 0
		return 0
	
  else :
		pos = n.count

		while ((val < n.value[pos]) and pos > 1):
			pos-=1
		if (val == n.value[pos]):
			return 1
		else:
			return 0
	

                        `,
                      },
                    },
                  }}
                />
                <Span>Examples: B Tree and B+ Tree</Span>
                <Span>
                  <b>B Tree</b>
                </Span>
                <Span>
                  They are perfectly balanced m way search trees where every
                  leaf node is at the same depth.Every node except root is
                  atleast half full (m/2).
                </Span>
                <Span>
                  Most of the tree operations require O(h) disk accesses , with
                  the help of fat b tree we can perform these operations with
                  O(log n). The height of B-Trees is kept low by putting maximum
                  possible keys in a B-Tree node. <br />
                  Minimum degree = t<br />
                  Nodes = 2*t -1
                </Span>
                <p>Basic Structure (Without Driver Code) :</p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        
class Btree
{

	constructor(t)
	{
		this.root = null; 
    // BTreeNode
		this.t = t;
	}
	
	traverse()
	{
		if (this.root != null)
			this.root.traverse();
	}

	search(k)
	{
		if (this.root == null)
			return null;
		else
			return this.root.search(k);
	}
	
}

class BTreeNode
{
	constructor(t,leaf)
	{
		this.t = t;
    // degree
		this.leaf = leaf;
		this.keys = new Array(2 * t - 1);
		this.C = new Array(2 * t);
		this.n = 0;
	}

	traverse()
	{

		let i = 0;
		for (i = 0; i < this.n; i++) {

			if (this.leaf == false) {
				C[i].traverse();
			}
			console.log(keys[i] + " ");
		}

		if (leaf == false)
			C[i].traverse();
	}
	
	search(k) 
	{
		let i = 0;
		while (i < n && k > keys[i])
			i++;

		if (keys[i] == k)
			return this;

		if (leaf == true)
			return null;
		return C[i].search(k);
	}
}
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>B+ Tree</b>
                </Span>
                <Span>
                  This tree eliminates the indexing problem of B tree by storing
                  data pointers only at the leaf nodes whereas data pointers are
                  present at both internal and leaf nodes in case of b tree
                </Span>
                <Span>
                  Leaf nodes are present as structural linked list which makes
                  it easier for search and other operations
                </Span>
                <p>
                  Duplicates nodes may present in this tree unlike b tree , as
                  copy of desired node will be used during certain operations.
                </p>
                <p>Basic Structure (Without Driver Code) :</p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      python: {
                        code: `MAX = 3
                        
class Node :
  def __init__(self):
    self.IS_LEAF=False
    self.key, self.size=[None]*MAX,0
    self.ptr=[None]*(MAX+1)


class BPTree :

  def __init__(self):
    self.root = None

  def search(self,x):

    if (self.root == None) :
      cout << "Tree is empty\n"
        else :

      cursor = self.root

      while (not cursor.IS_LEAF) :

        for i in range(cursor.size) :
          if (x < cursor.key[i]) :
            cursor = cursor.ptr[i]
            break
          if (i == cursor.size - 1) :
            cursor = cursor.ptr[i + 1]
            break
      for i in range(cursor.size):
        if (cursor.key[i] == x) :
          print("Found")
          return				
      print("Not found")
  
  def insert(self, x):

    if (self.root == None) :
      self.root = Node()
      self.root.key[0] = x
      self.root.IS_LEAF = True
      self.root.size = 1
    
    else :
      cursor = self.root
      parent=None
      while (not cursor.IS_LEAF) :

        parent = cursor

        for i in range(cursor.size) :
          if (x < cursor.key[i]) :
            cursor = cursor.ptr[i]
            break
          if (i == cursor.size - 1) :
            cursor = cursor.ptr[i + 1]
            break
          
        
      if (cursor.size < MAX) :
        i = 0
        while (i < cursor.size and x > cursor.key[i]):
          i+=1
        

        for j in range(cursor.size,i,-1):
          cursor.key[j] = cursor.key[j - 1]
        

        cursor.key[i] = x
        cursor.size+=1

        cursor.ptr[cursor.size] = cursor.ptr[cursor.size - 1]
        cursor.ptr[cursor.size - 1] = None
      

      else :

        newLeaf = Node()

        virtualNode=[None]*(MAX + 1)

        for i in range(MAX):
          virtualNode[i] = cursor.key[i]
        
        i = 0


        while (i < MAX and x > virtualNode[i]) :
          i+=1

        for j in range(MAX,i,-1) :
          virtualNode[j] = virtualNode[j - 1]
        

        virtualNode[i] = x
        newLeaf.IS_LEAF = True

        cursor.size = int((MAX + 1) / 2)
        newLeaf.size = int(MAX + 1 - (MAX + 1) / 2)

        cursor.ptr[cursor.size] = newLeaf

        newLeaf.ptr[newLeaf.size] = cursor.ptr[MAX]

        cursor.ptr[MAX] = None

        for i in range(cursor.size):
          cursor.key[i] = virtualNode[i]
      
        j=cursor.size
        for i in range(newLeaf.size):
          newLeaf.key[i] = virtualNode[j]
          j+=1
        if (cursor == self.root) :

          newRoot = Node()
          newRoot.key[0] = newLeaf.key[0]
          newRoot.ptr[0] = cursor
          newRoot.ptr[1] = newLeaf
          newRoot.IS_LEAF = False
          newRoot.size = 1
          root = newRoot
        
        else :


          insertInternal(newLeaf.key[0],
                parent,
                newLeaf)
      
    

def insertInternal(x, cursor, child):

  if (cursor.size < MAX) :
    i = 0

    while (x > cursor.key[i] and i < cursor.size) :
      i+=1
    for j in range(cursor.size,i,-1) :

      cursor.key[j] = cursor.key[j - 1]

    for j in range(cursor.size + 1, i + 1,-1):
      cursor.ptr[j] = cursor.ptr[j - 1]
    

    cursor.key[i] = x
    cursor.size+=1
    cursor.ptr[i + 1] = child
  
  else :

    newInternal = Node()
    virtualKey=[None]*(MAX + 1)
    virtualPtr=[None]*(MAX + 2)
    for i in range(MAX) :
      virtualKey[i] = cursor.key[i]
    

    for i in range(MAX + 1):
      virtualPtr[i] = cursor.ptr[i]
    i = 0

    while (x > virtualKey[i] and i < MAX) :
      i+=1
    for j in range(MAX + 1,i,-1):

      virtualKey[j] = virtualKey[j - 1]
    

    virtualKey[i] = x
    for j in range(MAX + 2, i + 1,-1) :
      virtualPtr[j] = virtualPtr[j - 1]
    

    virtualPtr[i + 1] = child
    newInternal.IS_LEAF = false

    cursor.size = (MAX + 1) / 2

    newInternal.size = MAX - (MAX + 1) / 2
    j = cursor.size + 1
    for i in range(newInternal.size):
      newInternal.key[i] = virtualKey[j]
      j+=1
    

    j = cursor.size + 1
    for i in range(newInternal.size):
      newInternal.ptr[i] = virtualKey[j]
      j+=1
    

    if (cursor == self.root) :

      newRoot = self.root
      newRoot.key[0] = cursor.key[cursor.size]
      newRoot.ptr[0] = cursor
      newRoot.ptr[1] = newInternal
      newRoot.IS_LEAF = false
      newRoot.size = 1
      root = newRoot
    else :
      insertInternal(cursor.key[cursor.size],
            findParent(root,
                  cursor),
            newInternal)

  def findParent(self, cursor, child):

    if (cursor.IS_LEAF or (cursor.ptr[0]).IS_LEAF) :
      return None
    
    for i in range(cursor.size + 1) :

      if (cursor.ptr[i] == child) :
        parent = cursor
        return parent
      else :
        parent = findParent(cursor.ptr[i], child)

        if (parent != None):
          return parent
    return parent


  def getRoot(self):
    return self.root


if __name__=='__main__':
  node=BPTree()
  node.insert(6)
  node.insert(16)
  node.insert(26)
  node.insert(36)
  node.insert(46)
  node.search(16)
                        `,
                        output: `Found`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Graph</b>
                </Span>
                <Span>
                  It consists of finite number of nodes (vertices) and edges
                  which connect two nodes.
                </Span>
                <Span>In facebook, each person is represented by a node.</Span>
                <Span>
                  <b>BFS & DFS</b>
                </Span>
                <Span>
                  BFS (level order traversal)(queue) &
                  DFS(preorder,postorder,inorder tree trvaersal)(stack) for
                  graph is similar to that of a graph, but unlike trees it may
                  contain cycles as well. A node may be visited twice that's why
                  we make use of boolean array.
                </Span>
                <Span>Representations:</Span>
                <Span>
                  <b>Adjacency List</b>
                </Span>
                <p>
                  It's a array (array[]) of lists where earch vertex each
                  element array[i] represents all the vertices adjacent to ith
                  vertex.
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        Map.prototype.inspect = function() {
                          return 'Map('+ mapEntriesToString(this.entries()) +')'
                        }
                                                
                        function mapEntriesToString(entries) {
                          return Array
                          .from(entries, ([k, v]) => k+':'+ v)
                          .join("");
                        }                       
                                                
                        class Graph {
                          constructor(noOfVertices)
                          {
                                this.noOfVertices = noOfVertices;
                                this.adjList = new Map();
                          }
                                                  
                          addVertex(v){
                            this.adjList.set(v, [])
                          }
                         
                          addEdge(v, w)
                          {
                            this.adjList.get(v).push(w);
                            this.adjList.get(w).push(v);
                          }
                           
                          printAdjList(){
                            console.log(this.adjList)
                            // because of custom prototype
                            var get_keys = this.adjList.keys();
                            for (var i of get_keys)
                            {
                                var get_values = this.adjList.get(i);
                                var conc = "";
                                for (var j of get_values)
                                    conc += j + " ";
                                console.log(i + " -> " + conc);
                            }
                        }
                        
                        bfs(startingNode)
                        {
                            var visited = {};
                            var q = [];
                            visited[startingNode] = true;
                            q.push(startingNode);
                            while (q.length!=0) {
                                var getQueueElement = q.shift();
                                console.log(getQueueElement);
                                var get_List = this.adjList.get(getQueueElement);
                                for (var i in get_List) {
                                    var neighbour = get_List[i];
                                    if (!visited[neighbour]) {
                                        visited[neighbour] = true;
                                        q.push(neighbour);
                                    }
                                }
                            }
                        }
                        
                        dfs(start){
                          this.dfsHelper(start,{})
                        }
                        
                        dfsHelper(vert,visited){
                          visited[vert] = true;
                          console.log(vert);
                          var get_neighbours = this.adjList.get(vert);
                          for (let neighbour of get_neighbours) {
                            if (!visited[neighbour])
                              this.dfsHelper(neighbour, visited);
                          }
                        }
                        }
                         
                          
                        const g = new Graph(6)
                        const v = ['A','B','C','D','E','F']
                        for(let x of v){
                          g.addVertex(x)
                        }
                        
                        g.addEdge('A', 'B');
                        g.addEdge('A', 'D');
                        g.addEdge('A', 'E');
                        g.addEdge('B', 'C');
                        g.addEdge('D', 'E');
                        g.addEdge('E', 'F');
                        g.addEdge('E', 'C');
                        g.addEdge('C', 'F');
                        g.printAdjList();
                        console.log("BFS");
                        g.bfs(v[0]);        
                        console.log("DFS");
                        g.dfs(v[0]);    
                        
                        // function addEdge(adj,u,v)
                        // {
                        //     adj[u].push(v);
                        //     adj[v].push(u);
                        // }
                        // function printGraph(adj)
                        // {
                        //     for (let i = 0; i < adj.length; i++) {
                        //     console.log("Adjacency list of vertex" + i);
                        //     console.log("head");
                        //     for (let j = 0; j < adj[i].length; j++) {
                        //      console.log(" -> "+adj[i][j]);
                        //     }
                        //    }
                        // }
                        // let V = 5;
                        // let adj= [];        
                        // for (let i = 0; i < V; i++)
                        //     adj.push([]);
                        //  addEdge(adj, 0, 1);
                        //  addEdge(adj, 0, 4);
                        //  addEdge(adj, 1, 2);
                        //  addEdge(adj, 1, 3);
                        //  addEdge(adj, 1, 4);
                        //  addEdge(adj, 2, 3);
                        //  addEdge(adj, 3, 4);                    
                        `,
                      },
                    },
                    output: `
                    Map {
                      'A' => [ 'B', 'D', 'E' ],
                      'B' => [ 'A', 'C' ],
                      'C' => [ 'B', 'E', 'F' ],
                      'D' => [ 'A', 'E' ],
                      'E' => [ 'A', 'D', 'F', 'C' ],
                      'F' => [ 'E', 'C' ]
                    }
                    A -> B D E 
                    B -> A C 
                    C -> B E F 
                    D -> A E 
                    E -> A D F C 
                    F -> E C 
                    BFS
                    A
                    B
                    D
                    E
                    C
                    F
                    DFS
                    A
                    B
                    C
                    E
                    D
                    F`,
                  }}
                />
                <Span>
                  <b>Adjacency Matrix</b>
                </Span>
                <Span>
                  It's a 2D array(adj[][]) of size V * V, where V is the number
                  of vertices in the graph. adj[u][v]= 1 for unweighted graph
                  means there is a edge between u and v.
                </Span>
                <p>
                  In case of weighted graphs , if adj[i][j] = w, then w will be
                  the weight of the edge between vertices u and v.
                  <br />
                  Adding a vertex: O(V^2)
                  <br />
                  Removing a vertex: O(1)
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class Graph
                        {
                          constructor(x)
                          {
                            this.n=x;
                            // numOfVertices
                            // this.g = new Array(10);
                            
                            // this.g = Array(10).fill(null).map(()=>Array(10).fill(0));
                            // ineffient and Array(10).fill(Array(10)) is bad as rows will be copied by reference
                            // var arr = Array(2).fill(Array(4))  
                            // arr[0][0] =1
                            // arr , arr[0][0] , arr1[0][1]
                            
                            this.g = Array.from(Array(10),()=>Array(10).fill(0))
                            // more efficient
                            
                            
                        
                            // for(let i=0;i<10;i++)
                            // {
                            // 	this.g[i]=new Array(10);
                            // 	for(let j=0;j<10;j++)
                            // 	{
                            // 		this.g[i][j]=0;
                            // 	}
                            // }
                            // adjMatrix
                          }
                          
                          displayAdjacencyMatrix()
                          {
                            console.log("Adjacency Matrix:");
                            for (let i = 0; i < this.n; ++i)
                            {
                              let output=""
                              for (let j = 0; j < this.n; ++j)
                              {
                                output += " " + this.g[i][j];
                              }
                              console.log(output)
                            }
                          }
                          
                          addEdge(x,y)
                          {
                            if ((x >= this.n) || (y > this.n))
                            {
                              console.log("Vertex does not exists!");
                            }
                        
                            if (x == y)
                            {
                              console.log("Same Vertex!");
                            }
                            else
                            {
                              this.g[y][x] = 1;
                              this.g[x][y] = 1;
                            }
                          }
                          
                          addVertex()
                          {
                            this.n++;
                            for (let i = 0; i < this.n; ++i)
                            {
                              this.g[i][this.n - 1] = 0;
                              this.g[this.n - 1][i] = 0;
                            }
                          }
                          
                          removeVertex(x)
                          {
                            if (x > this.n)
                            {
                              console.log("Vertex not present!");
                              return;
                            }
                            else
                            {
                              let i;
                              while (x < this.n)
                              {
                                for (i = 0; i < this.n; ++i)
                                {
                                  this.g[i][x] = this.g[i][x + 1];
                                }
                        
                                for (i = 0; i < this.n; ++i)
                                {
                                  this.g[x][i] = this.g[x + 1][i];
                                }
                                x++;
                              }
                              this.n--;
                            }
                          }
                          
                        }
                        
                        let obj = new Graph(4);
                        // 0 1 2 3 4 -> vertices
                        obj.addEdge(0, 1);
                        obj.addEdge(0, 2);
                        obj.addEdge(1, 2);
                        obj.addEdge(2, 3);
                        obj.displayAdjacencyMatrix();
                        obj.addVertex();
                        obj.addEdge(4, 1);
                        obj.addEdge(4, 3);
                        obj.displayAdjacencyMatrix();
                        obj.removeVertex(1);
                        obj.displayAdjacencyMatrix();                                              
                        `,
                      },
                    },
                    output: `
                    Adjacency Matrix:
                    0 1 1 0
                    1 0 1 0
                    1 1 0 1
                    0 0 1 0
                   Adjacency Matrix:
                    0 1 1 0 0
                    1 0 1 0 1
                    1 1 0 1 0
                    0 0 1 0 1
                    0 1 0 1 0
                   Adjacency Matrix:
                    0 1 0 0
                    1 0 1 0
                    0 1 0 1
                    0 0 1 0
                    `,
                  }}
                />
                <Span>
                  <b>Trie</b>
                </Span>
                <p>
                  Trie is a tree which stores strings that can be used for
                  efficient information re<b>trie</b>val. Using well balanced
                  bst we can perform insert, delete and search operations in M *
                  O(log n) where M is max length of string and n is number of
                  keys , but we can implement same set of operations in O(M) in
                  trie.
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        let ALPHABET_SIZE = 26;

                        class TrieNode {
                            constructor() {
                                this.children = new Array(ALPHABET_SIZE);
                                this.isEndOfWord = false;
                            }
                        }
                        
                        let keys = ["the", "a", "there", "answer",
                                               "any", "by", "bye", "their" 
                        ];
                        
                        let n = keys.length;
                        
                        class Trie {
                            constructor() {
                                this.root = new TrieNode()
                            }
                        
                            insert(key) {
                                let level;
                                let length = key.length;
                                let index;
                               
                                let pCrawl = this.root;
                                // pointer pCrawl == this.root pCrawl === this.root
                        
                                for (level = 0; level < length; level++)
                                {
                                    index = key[level].charCodeAt(0) - 97;
                                    if (pCrawl.children[index] == null)
                                        pCrawl.children[index] = new TrieNode();
                               
                                    pCrawl = pCrawl.children[index];
                                }
                                pCrawl.isEndOfWord = true;
                            }
                        
                            search(key) {
                                let level;
                                let length = key.length;
                                let index;
                                let pCrawl = this.root;
                               
                                for (level = 0; level < length; level++)
                                {
                                    index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
                               
                                    if (!pCrawl.children[index])
                                        return false;
                               
                                    pCrawl = pCrawl.children[index];
                                }
                               
                                return (pCrawl.isEndOfWord);
                            }
                        
                            isEmpty(root=this.root) {
                                for (let i = 0; i < ALPHABET_SIZE; i++)
                                    if (root.children[i] != null)
                                        return false;
                                return true;
                            }
                        
                            remove(key,depth){
                             this.removeHelper(key,depth,this.root)
                            }
                        
                            removeHelper(key, depth,root) {
                                if (root == null)
                                    return null;
                                if (depth == key.length) {
                                    if (root.isEndOfWord)
                                        root.isEndOfWord = false;
                                    if (this.isEmpty(root)) {
                                        root = null;
                                    }
                                    return root;
                            }
                        
                            let index = key[depth].charCodeAt(0) - 'a'.charCodeAt(0);
                            root.children[index] =
                            this.removeHelper(key, depth + 1,root.children[index]);
                        
                            if (this.isEmpty(root) && root.isEndOfWord == false) {
                                    root = null;
                            }
                            return root
                            }
                        
                            isLeafNode(root)
                            {
                            return root.isEndOfWord !== false;
                            }
                          
                            print(){
                             this.printHelper(this.root,[],0)
                            }
                        
                            printHelper(root,str,level){
                        
                        
                            if (this.isLeafNode(root)) 
                            {
                                str[level] = '';
                                console.log(str.join('').substring(0,str.indexOf('')))
                            }
                            let i;
                            for (i = 0; i < ALPHABET_SIZE; i++) 
                            {
                        
                                if (root.children[i] !== undefined) 
                                {
                                    str[level] = String.fromCharCode(i+97);
                                    this.printHelper(root.children[i], str, level + 1);
                                }
                            }
                            }
                        
                        }
                        
                        const trie = new Trie();
                        
                        for (let i = 0; i < n; i++)
                            trie.insert(keys[i]);
                        
                        console.log(trie.search("the")) // true
                        console.log(trie.search("anyer")) // false
                        trie.print()
                        trie.remove("the", 0);
                        console.log(trie.search("the")) // false
                        trie.print()
                        
                        `,
                        output: `
                        true
                        false
                        a
                        answer
                        any
                        by
                        bye
                        the
                        their
                        there
                        false
                        a
                        answer
                        any
                        by
                        bye
                        their
                        there
                        `,
                      },
                    },
                  }}
                />
              </>
            ),
          },
          {
            title: "Tabular",
            content: (
              <>
                <Span>
                  <b>Hash Table</b>
                </Span>
                <Span>
                  A Hash Table transforms a key into an integer index using a
                  hash function, and the index will decide where to store the
                  key/value pair in memory:
                </Span>
                <b>Implementation</b>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        class HashTable {
                          constructor() {
                            this.table = new Array(127);
                            this.size = 0;
                          }
                        
                          _hash(key) {
                            let hash = 0;
                            for (let i = 0; i < key.length; i++) {
                              hash += key.charCodeAt(i);
                            }
                            return hash % this.table.length;
                          }
                        
                          set(key, value) {
                            const index = this._hash(key);
                            this.table[index] = [key, value];
                            this.size++;
                          }
                        
                          get(key) {
                            const target = this._hash(key);
                            return this.table[target];
                          }
                        
                          remove(key) {
                            const index = this._hash(key);
                        
                            if (this.table[index] && this.table[index].length) {
                              this.table[index] = [];
                              this.size--;
                              return true;
                            } else {
                              return false;
                            }
                          }
                        }
                        
                        const ht = new HashTable();
                        
                        ht.set("a", 1);
                        ht.set("b", 2);
                        console.log(ht.get("a")); 
                        console.log(ht.get("b"));
                        `,
                        output: `
                        [ 'a', 1 ]
[ 'b', 2 ]
                        `,
                      },
                    },
                  }}
                />
                <Span>Map</Span>
                <p>
                  A map stores a collection of (key,value) pairs, such that each
                  possible key appears at most once in the collection.
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
console.log(map.get('a'));
map.set('a', 97);
console.log(map.get('a'));
console.log(map.size);
map.delete('b');
console.log(map.size);
console.log(map.has('a'))
for (const [key, value] of map) {
  console.log(key + ' = ' + value)
}
map.forEach(function(value, key) {
  console.log(key + ' = ' + value)
})
console.log([...map])
console.log(Array.from(map))
const original = new Map([
  [1, 'one']
])
const clonedMap = new Map(original)
console.log(Array.from(original))
console.log(map.entries())

                        `,
                        output: `
                        1
97
3
2
true
a = 97
c = 3
a = 97
c = 3
[ [ 'a', 97 ], [ 'c', 3 ] ]
[ [ 'a', 97 ], [ 'c', 3 ] ]
[ [ 1, 'one' ] ]
[Map Entries] { [ 'a', 97 ], [ 'c', 3 ] }
                        `,
                      },
                      Java: {
                        code: `
                        // All three classes HashMap, TreeMap and LinkedHashMap
// implements java.util.Map interface, and represents
// mapping from unique key to values.

import java.util.*;
import java.io.*;

class Main{

  static PrintStream ps = System.out;

  public static void main(String ...s){
  
  // HashMap is implemented by array of linked lists. It contains 
  // unique elements. It may have one null key and multiple null
  // values.
  // It maintains no order.
  // HashMap extends AbstractMap

  HashMap<Integer, String> map = new HashMap<Integer, String>();
  map.put(9,"b");
  map.put(8,"a");
  ps.println(map.get(9));
  ps.println(map.containsKey(8));
  ps.println(map.containsValue("b"));
  ps.println(map.keySet());
  map.entrySet().forEach(ps::println);
  
  // LinkedHashMap is same as hahmap but maintains insertion
  // order and is implemeted by doubly linked buckets.

  Map<Integer, String> map1 = new LinkedHashMap<Integer, String>();
  map1.put(8,"a");
  map1.put(9,"b");
  map1.entrySet().forEach(ps::println);

  // A TreeMap contains values based on the key
  // It is same as HashMap instead maintains ascending 
  // order(Sorted using the natural order of its key). 

  Map<Integer, String> map2 = new TreeMap<Integer, String>();
  map2.put(9,"a");
  map2.put(8,"b");
  map2.entrySet().forEach(ps::println);

  // A HashTable is an array of list (bucket). Position of
  // bucket is identified by calling hashcode()


  Hashtable<Integer, String> ht = new Hashtable<>(4);
  ht.put(1, "one");
  ht.put(2, "two");
  ht.put(3, "three");
  ps.println(ht);
  // It contains only unique elements . It is synchronized
  // and a legacy class.

  }

}
                        `,
                        output: `
                        b
true
true
[8, 9]
8=a
9=b
8=a
9=b
8=b
9=a
{3=three, 2=two, 1=one}
                        `,
                      },
                      Kotlin: {
                        code: `import java.util.*
                        import java.util.function.Consumer
                        
                        internal object Main {
                            private var ps = System.out
                            @JvmStatic
                            fun main(s: Array<String>) {
                                
                                val map = HashMap<Int, String>()
                                map[9] = "b"
                                map[8] = "a"
                                ps.println(map[9])
                                ps.println(map.containsKey(8))
                                ps.println(map.containsValue("b"))
                                ps.println(map.keys)
                                map.entries.forEach(Consumer<Map.Entry<Int, String>> { x: Map.Entry<Int, String>? ->
                                    ps.println(
                                        x
                                    )
                                })
                                val map1: MutableMap<Int, String> = LinkedHashMap()
                                map1[8] = "a"
                                map1[9] = "b"
                                map1.entries.forEach(Consumer<Map.Entry<Int, String>> { x: Map.Entry<Int, String>? ->
                                    ps.println(
                                        x
                                    )
                                })
                                val map2: MutableMap<Int, String> = TreeMap()
                                map2[9] = "a"
                                map2[8] = "b"
                                map2.entries.forEach(Consumer<Map.Entry<Int, String>> { x: Map.Entry<Int, String>? ->
                                    ps.println(
                                        x
                                    )
                                })
                                val ht = Hashtable<Int, String>(4)
                                ht[1] = "one"
                                ht[2] = "two"
                                ht[3] = "three"
                                ps.println(ht)
                            }
                        }`,
                        output: `
                        b
                        true
                        true
                        [8, 9]
                        8=a
                        9=b
                        8=a
                        9=b
                        8=b
                        9=a
                        {3=three, 2=two, 1=one}
                        `,
                      },
                      Python: {
                        code: `# Python Maps also called ChainMap is a type of data
# structure to manage multiple dictionaries together 
# as one unit. The combined dictionary contains the key
# and value pairs in a specific sequence eliminating 
# any duplicate keys. 

import collections

dict1 = {'day1': 'Mon', 'day2': 'Tue'}
dict2 = {'day3': 'Wed', 'day1': 'Thu'}

res = collections.ChainMap(dict1, dict2)

print(res.maps)

print('Keys = {}'.format(list(res.keys())))
print('Values = {}'.format(list(res.values())))
print()

print('elements:')
for key, val in res.items():
   print('{} = {}'.format(key, val))
print()

print('day3 in res: {}'.format(('day1' in res)))
print('day4 in res: {}'.format(('day4' in res)))

res2 = collections.ChainMap(dict2, dict1)
print(res2.maps)

dict2['day4'] = 'Fri'
print(res.maps)`,
                        output: `
                        [{'day1': 'Mon', 'day2': 'Tue'}, {'day3': 'Wed', 'day1': 'Thu'}]
Keys = ['day3', 'day1', 'day2']
Values = ['Wed', 'Mon', 'Tue']

elements:
day3 = Wed
day1 = Mon
day2 = Tue

day3 in res: True
day4 in res: False
[{'day3': 'Wed', 'day1': 'Thu'}, {'day1': 'Mon', 'day2': 'Tue'}]
[{'day1': 'Mon', 'day2': 'Tue'}, {'day3': 'Wed', 'day1': 'Thu', 'day4': 'Fri'}]
                        `,
                      },
                      "C++": {
                        code: `
                        // #include <iostream>
// #include <iterator>
// #include <map>
#include <bits/stdc++.h>

using namespace std;

// map vs unordered_map

// order is maintained in map and we need predecessor/successor 
// of elements whereas no order is required in case of
// unordered map, single element can be accessed w/o any 
// traversal and we need to keep count of some data.

int main()
{

	map<int, int> m;
  m[0] = 60;
	m.insert(pair<int, int>(1, 40));
	m.insert(pair<int, int>(2, 30));
	m.insert(pair<int, int>(3, 60));
	m.insert(pair<int, int>(4, 20));
	m.insert(pair<int, int>(5, 50));
	m.insert(pair<int, int>(6, 50));
	m.insert(pair<int, int>(7, 10));
	// m.erase(m.begin(), m.find(3));
  m.erase(m.find(3));
	map<int, int>::iterator itr;
	cout << "The map m is : "<< endl;
	for (itr = m.begin(); itr != m.end(); ++itr) {
		cout << itr->first << ':' << itr->second<< endl;
	}
	cout << endl;

  unordered_map<int, int> umap;

	umap[5] = 10;
	umap[3] = 5;
	umap[20] = 100;
	umap[1] = 1;
  umap.erase(1);

	for (auto i = umap.begin();
		i != umap.end(); i++)
	{
		cout << i->first
				<< " : "
				<< i->second << endl;
	}

  if(umap.find(9)==umap.end()){
    cout << "Not found"  << endl;
  }

	return 0;
}
                        `,
                        output: `
                        The map m is : 
0:60
1:40
2:30
4:20
5:50
6:50
7:10

20 : 100
5 : 10
3 : 5
Not found
                        `,
                      },
                    },
                  }}
                />
                <Span>Set</Span>
                <p>
                  A set is an abstract data type that can store unique values,
                  without any particular order.
                  {/* https://www.tutorialspoint.com/python_data_structure/python_maps.htm */}
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        const customSet = new Set()

                        customSet.add(1)          
                        customSet.add(5)           
                        customSet.add(5)    
                        customSet.add(true)           
                        customSet.add('abc') 
                        const o = {a: 1, b: 2}
                        customSet.add(o)
                        customSet.delete(1)
                        console.log(customSet)
                        console.log(customSet.has(o))
                        console.log(customSet.size)
                        const mySet1 = customSet
                        console.log(Array.from(new Set([1,2,3,3])))
                        for (let item of mySet1) console.log(item)
                        for (let item of mySet1.keys()) console.log(item)
                        for (let [key, value] of mySet1.entries()) console.log(key)
                        
                        `,
                        output: `
                        Set { 5, true, 'abc', { a: 1, b: 2 } }
                        true
                        4
                        [ 1, 2, 3 ]
                        5
                        true
                        abc
                        { a: 1, b: 2 }
                        5
                        true
                        abc
                        { a: 1, b: 2 }
                        5
                        true
                        abc
                        { a: 1, b: 2 }
                        `,
                      },
                      Java: {
                        code: `
                        // All three classes HashSet, TreeSet and LinkedHashSet
// implements java.util.Set interface, and represents
// mapping from unique key to values.

import java.util.*;
import java.io.*;

// HashSet: If you don't want to maintain insertion order but want  
// to store unique objects. (thread -safe)
// LinkedHashSet: If you want to maintain the insertion order of 
// elements then you can use LinkedHashSet. (not thread -safe)
// TreeSet: If you want to sort the elements according to some 
// Comparator then use TreeSet. (not thread -safe)

// Order of execution forinsertion and deletion operations:
// TreeSet > LinkedHashSet > HashSet

class Helper implements Comparator<String> {
  
    public int compare(String str1, String str2)
    {
  
        String first_Str;
        String second_Str;
  
        first_Str = str1;
        second_Str = str2;
  
        return second_Str.compareTo(first_Str);
    }
}


class Main{

  static PrintStream ps = System.out;

  public static void main(String ...s){

    LinkedHashSet<String> set1
            = new LinkedHashSet<>();
    TreeSet<String> set2 = new TreeSet<>();
    HashSet<String> set3 = new HashSet<String>();
    TreeSet<String> set4 = new TreeSet<String>(new Helper());

    for (String str : Arrays.asList("A", "B","C", "D")) {
      set1.add(str);
      set2.add(str);
      set3.add(str);
      set4.add(str);
    }

    set1.remove("D");

    ps.println(set1);
    ps.println(set2);
    ps.println(set3);
    ps.println(set4);
    ps.println(set1.contains("A"));

  }

}
                        `,
                        output: `
                        [A, B, C]
[A, B, C, D]
[A, B, C, D]
[D, C, B, A]
true
                        `,
                      },
                      Kotlin: {
                        code: `import java.io.PrintStream
                        import java.util.*
                        
                        internal class Helper : Comparator<String> {
                            override fun compare(str1: String, str2: String): Int {
                                val str1: String = str1
                                return str2.compareTo(str1)
                            }
                        }
                        
                        internal object Main {
                            private var ps: PrintStream = System.out
                            @JvmStatic
                            fun main(s: Array<String>) {
                                val set1 = LinkedHashSet<String>()
                                val set2 = TreeSet<String>()
                                val set3 = HashSet<String>()
                                val set4 = TreeSet(Helper())
                                for (str in listOf("A", "B", "C", "D")) {
                                    set1.add(str)
                                    set2.add(str)
                                    set3.add(str)
                                    set4.add(str)
                                }
                                set1.remove("D")
                                ps.println(set1)
                                ps.println(set2)
                                ps.println(set3)
                                ps.println(set4)
                                ps.println(set1.contains("A"))
                            }
                        }`,
                        output: `
                        [A, B, C]
                        [A, B, C, D]
                        [A, B, C, D]
                        [D, C, B, A]
                        true
                        `,
                      },
                      Python: {
                        code: `days=set(["Mon","Tue","Wed","Thu","Fri","Sat","Sun",1])

months={"Jan","Feb","Mar"}

dates={21,22,17}

days.add("Sun")

days.discard(1)

# set1 - set2 set1 & set2 

print(days)
print(months)
print(dates)
                        `,
                        output: `
                        {'Sat', 'Tue', 'Mon', 'Fri', 'Sun', 'Wed', 'Thu'}
{'Feb', 'Jan', 'Mar'}
{17, 21, 22}
                        `,
                      },
                      "C++": {
                        code: `
                        #include <bits/stdc++.h>
using namespace std;

set<int> s;

void inorderSuccessor(int key) {
	if (s.find(key) == s.end()) {
		cout << "Key doesn't exist"<<endl;
		return;
	}
	set<int>::iterator it;
	it = s.find(key);
	++it;
	if (it == s.end()) {
		cout << "No successor"<<endl;
		return;
	}
	cout << "successor of " << key << " is=";
	cout << *(it) << endl;
}

void inorderPredecessor(int key) {
	if (s.find(key) == s.end()) {
		cout << "Key doesn't exist"<<endl;
		return;
	}

	set<int>::iterator it;
	it = s.find(key);
	if (it == s.begin()) {
		cout << "No predecessor"<<endl;
		return;
	}
	--it;
	cout << "predecessor of " << key << " is=";
	cout << *(it) << endl;
}

int main() {
	s.insert(5);
	s.insert(1);
	s.insert(6);
	s.insert(3);
	s.insert(7);
	s.insert(2);
	s.erase(7);
	unordered_set<int> s1;
	s1.insert(5);
	s1.insert(1);
	s1.insert(6);
	s1.insert(3);
	s1.insert(7);
	s1.insert(2);
	s1.erase(7);

	cout << "Elements of set in sorted order:" << endl;
	for (auto it : s)
		cout << it << " ";
	cout << endl;

	cout << "Elements of unordered_set:" << endl;
	for (auto it1 : s1)
		cout << it1 << " ";
	cout << endl;
	inorderPredecessor(5);
	inorderPredecessor(1);
	inorderPredecessor(8);
	inorderSuccessor(5);
	inorderSuccessor(2);
	inorderSuccessor(9);

	return 0;
}
                        `,
                        output: `
                        Elements of set in sorted order:
1 2 3 5 6 
Elements of unordered_set:
2 3 6 5 1 
predecessor of 5 is=3
No predecessor
Key doesn't exist
successor of 5 is=6
successor of 2 is=3
Key doesn't exist
                        `,
                      },
                    },
                  }}
                />
              </>
            ),
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
              <b>Tabular Data Structure (Hash Tables)</b>
            </Span>
            <Span>
              It stores data in an associative manner. It can be linear as well
              as non linear. Access of data becomes really easy if its unique
              index is known.
            </Span>
            <Span>
              <b>Hashing</b>
            </Span>
            <Span>
              It's a technique to convert a range of keys into range of indexes
              of an array.
            </Span>
            <Span>array index h(x) = key % constant</Span>
            <Span>
              <b>Collision Resolution:</b>
            </Span>
            <Span>
              It may happen that hashing technique results into a index which
              already exists.This is known as collision. We make use of
              collision resolution to assign indexes to keys in such kind of
              scenarios.
            </Span>
            <Span>
              <b>Types:</b>
            </Span>
            <Span>
              <b>Open Hashing (Separate Chaining) </b>
            </Span>
            <Span>
              We make each cell of point table point to a linked list of
              records.
            </Span>
            <Span>
              <b>Closed Hashing ( Open Addressing )</b>
            </Span>
            <Span>
              In Open Addressing, all elements are stored in the hash table
              itself. So at any point, the size of the table must be greater
              than or equal to the total number of keys
            </Span>
            <Span>
              <b>Types:</b>
            </Span>
            <Span>
              <b>Linear Probing</b>
            </Span>
            <Span>
              In this type, we simply make use of next slot in case of
              collision.
            </Span>
            <Span>h(x) = (h(x) + i)% constant , i= 0,1,2,3</Span>
            <Span>
              Primary clustering and secondary clustering are two challenges for
              linear probing.
              <br /> In primary clusetring, many consecutive elements form
              groups and it starts taking time to find a free slot or to search
              for an element.
              <br />
              Two records only have the same collision chain (Probe Sequence) if
              their initial position is the same. It's less severe.
            </Span>
            <Span>
              <b>Quadratic Probing</b>
            </Span>
            <Span>We look for i*ith slot in ith iteration.</Span>
            <Span>h(x) = (h(x) + i*2) % constant ,and i= 0,1,2,3</Span>
            <Span>
              <b>Double hashing</b>
            </Span>
            <Span>
              We use another hash function g(x) and look for i*g(x) slot in ith
              rotation.{" "}
            </Span>
            <Span>h(x) = (h(x) + i*g(x))% constant</Span>
            <Span>
              <b>Hash functions:</b>
            </Span>
            <Span>
              Mod ( h(x) = x % size + 1 ) , Mid Square ( h(x) = |x*x| ) and
              Folding ( add all elements and ignore carry's )
            </Span>
          </>
        ),
      },
    },
  },
  algo: {
    title: "Algorithms",
    content: (
      <>
        <Span>
          It's a step by step procedure to solve computational problem.
        </Span>
        <Span>
          <b>Algorithm:</b>
        </Span>
        <Span>
          1. It's written at design time.
          <br />
          2. Author should have domain knowledge.
          <br />
          3. It can written in any language.
          <br />
          4. It should be machine independent.
          <br />
          5. It can be analyzed for space/time complexity.
          <br />
          6. Priori analysis is associated with algorithm.
        </Span>
        <Span>
          <b>Program:</b>
        </Span>
        <Span>
          1. It's written at implementation time.
          <br />
          2. Should be written by programmer.
          <br />
          3. It can written in a programming language.
          <br />
          4. It should be machine dependent ( hardware and operating system ).
          <br />
          5. It can be tested (watch time and bytes).
          <br />
          6. Posteriori analysis is associated with program.
        </Span>
        <Span>
          <b>Charactersitic's of algorithm:</b>
        </Span>
        <p>
          <p>1. Input: 0 or more</p>
          <p>2. Output: atleast 1</p>
          <p>3. Definiteness: every stmt. should be clear</p>
          <p>4. Finiteness: algorithm should have finite steps</p>
          <p>5. Effectiveness: every step must be used</p>
        </p>
        <br />
        <Span>
          <b>Algorithms can be analysed using following parameters:</b>
        </Span>
        <Span>
          1. Time <br /> 2. Space <br /> 3. N/W Consumption <br /> 4. Power
          Consumption <br /> 5. CPU Registers Consumption
        </Span>
      </>
    ),
    types: {
      sort: {
        title: "Sorting",
        types: [
          {
            title: "Comparison Based",
            content: (
              <>
                <Span>Let n be number of elements.</Span>
                <Span>
                  <b>Bubble Sort</b>
                </Span>
                <Span>
                  We can visualize this sort with the help of act of throwing
                  stones into the sea. More heavier stone will settle at tha
                  bottom compared to lighter ones. It's adaptive as well as
                  stable. We can't perform this sort at linked list due to time
                  consumption. Each of k passes, provides us the kth largest
                  element.
                </Span>
                <p>
                  Best TC: O(n) ( already sorted ) <br />
                  Average TC: O(n^2) <br />
                  Worst TC: O(n^2) <br />
                  Worst Space Complexity: O(1) <br />
                  Number of passes: n-1 <br />
                  Number of comparisons : n(n-1)/2 <br />
                  Max. Number of swaps: n(n-1)/2
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        function bubbleSort(arr, n)
{
	  let i, j, temp;
		let flag;
		for (i = 0; i < n - 1; i++)
		{
			flag = false;
			for (j = 0; j < n - i - 1; j++)
			{
				if (arr[j] > arr[j + 1])
				{
					temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
					flag = true;
				}
			}
      // optimized way to brak outer loop in b/w
      // if provided i/p is already sorted.
			if (flag == false)
				break;
		}
}

var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
var n = arr.length;
bubbleSort(arr, n);
console.log(arr)
                        `,
                        output: `
                        [
                          11, 12, 22, 25,
                          34, 64, 90
                        ]
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Insertion Sort</b>
                </Span>
                <Span>
                  It works similar to the way we sort playing cards after each
                  iteration. We split original array virtually into two parts:
                  sorted and unsorted. Values from the unsorted part are picked
                  and placed at the correct position in the sorted part. It's
                  adaptive (by nature) and stable. And can be used to sort the
                  linked list.
                </Span>
                <Span>
                  We can use binary search to reduce the number of comparisons
                  in normal insertion sort. Binary Insertion Sort uses binary
                  search to find the proper location to insert the selected item
                  at each iteration. In normal insertion, sorting takes O(i) (at
                  ith iteration) in worst case. We can reduce it to O(logi) by
                  using binary search. It makes use of incremental approach.
                </Span>
                <Span>
                  Insertion sort is used when number of elements is small. It
                  can also be useful when input array is almost sorted, only few
                  elements are misplaced in complete big array.
                </Span>
                <Span>
                  For very small n, Insertion Sort is faster than more efficient
                  algorithms such as Quicksort or Merge Sort.
                </Span>
                <p>
                  Best TC: O(n) ( already sorted ) <br />
                  Average TC: O(n^2) <br />
                  Worst TC: O(n^2) <br />
                  Worst Space Complexity: O(1) <br />
                  Number of passes: n-1 <br />
                  Number of comparisons : n(n-1)/2 <br />
                  Max. Number of swaps: n(n-1)/2 O(n*n)
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        function insertionSort(arr, n)
{
	let i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

let arr = [12, 11, 13, 5, 6 ]; 
let n = arr.length; 
insertionSort(arr, n); 
console.log(arr)
                        `,
                        output: `
                        [ 5, 6, 11, 12, 13 ]
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Selection Sort</b>
                </Span>
                <Span>
                  This is used to place smallest element at the start after each
                  iteration. It's neither adaptive nor stable.Each of k passes,
                  provides us the kth smallest element. It can be made stable.
                  It's used when no. of swaps are limited.
                </Span>
                <Span>
                  Selection sort performs a smaller number of swaps compared to
                  bubble sort; therefore, even though both sorting methods are
                  of O(N2), selection sort performs faster and more efficiently!
                </Span>
                <p>
                  Best TC: O(n^2)
                  <br />
                  Average TC: O(n^2) <br />
                  Worst TC: O(n^2) <br />
                  Worst Space Complexity: O(1) <br />
                  Number of swap: n-1 ( minimum among all kinds of sorts ){" "}
                  <br />
                  No. of comparisons: n(n-1)/2, O(n*n)
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        function selectionSort(arr, n)
{
	let i, j, min, temp;
	for (i = 0; i < n-1; i++)
	{
    min = i;
    for(j = i+1; j<n; j++)
    if(arr[j]<arr[min]){
      min = j;
    }
    temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
	}
}

let arr = [12, 11, 13, 5, 6 ]; 
let n = arr.length; 
selectionSort(arr, n); 
console.log(arr)
                        `,
                        output: `
                        [ 5, 6, 11, 12, 13 ]
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Heap Sort</b>
                </Span>
                <Span>
                  It is based on binary heap. It's similar to selection sort
                  where place the minimum element at start after each iteration.
                </Span>
                <Span>
                  The time required to perform Heap sort increases
                  logarithmically while other algorithms may grow exponentially
                  slower as the number of items to sort increases. This sorting
                  algorithm is very efficient. Memory usage is minimal because
                  apart from what is necessary to hold the initial list of items
                  to be sorted, it needs no additional memory space to work
                </Span>
                <Span>
                  Best TC: O(nlogn)
                  <br />
                  Average TC: O(nlogn) <br />
                  Worst TC: O(nlogn) <br />
                  Space Complexity: O(n)
                </Span>
                <Span>
                  <b>Array representation for binary heap:</b>
                </Span>
                <Span>
                  Since , binary heap is a complete binary tree , if the parent
                  node is stored at index i, then left child can be calculated
                  using 2*i + 1 and right can be defined using 2*i +2
                </Span>
                <Span>
                  <b>Heapify</b>
                </Span>
                <p>
                  The process of reshaping a binary tree into a Heap data
                  structure is known as "heapify".{" "}
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        function sort(arr)
                        {
                          var n = arr.length;
                      
                          for (var i = Math.floor(n / 2) - 1; i >= 0; i--) // O(n)
                            heapify(arr, n, i); // O(log n)
                            // O(nlogn)
                      
                          for (var i = n - 1; i > 0; i--) {
                            var temp = arr[0];
                            arr[0] = arr[i];
                            arr[i] = temp;
                            heapify(arr, i, 0);
                          }
                        }
                      
                          function heapify(arr, n, i)
                          {
                              var largest = i; 
                              var l = 2 * i + 1; 
                              var r = 2 * i + 2; 
                      
                              if (l < n && arr[l] > arr[largest])
                                  largest = l;
                      
                               if (r < n && arr[r] > arr[largest])
                                  largest = r;
                      
                              if (largest != i) {
                                  var swap = arr[i];
                                  arr[i] = arr[largest];
                                  arr[largest] = swap;
                                  heapify(arr, n, largest);
                              }
                          }
                      
                      const arr = [9,2,7,1,0]
                      sort(arr)
                      console.log(arr)                      
                        `,
                        output: `[ 0, 1, 2, 7, 9 ]`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Merge Sort</b>
                </Span>
                <Span>
                  It is a divide and conquer algorithm. It divides the array
                  into two parts, calls itself for each half and merges two
                  halves.It's stable.
                </Span>
                <Span>
                  Merge Sort is a recursive algorithm and time complexity can be
                  expressed as following recurrence relation.
                  <br /> T(n) = 2T(n/2) + θ(n)
                </Span>
                <Span>
                  It's used for sorting linked list in nlog(n) time.And it's
                  used in external sorting. It's slower than other algorithms
                  for smaller tasks. Merge sort algorithm requires an additional
                  memory space of 0(n) for the temporary array. It goes through
                  the whole process even if the array is sorted.
                </Span>
                <Span>
                  <b>External sorting</b>
                </Span>
                <Span>
                  External sorting is a class of sorting algorithms that can
                  handle massive amounts of data. External sorting is required
                  when the data being sorted do not fit into the main memory of
                  a computing device (usually RAM) and instead they must reside
                  in the slower external memory, usually a hard disk drive.
                  Thus, external sorting algorithms are external memory
                  algorithms and thus applicable in the external memory model of
                  computation. External sorting algorithms generally fall into
                  two types, distribution sorting, which resembles quicksort,
                  and external merge sort, which resembles merge sort.
                </Span>
                <Span>
                  merge sort always divides the array into two halves and takes
                  linear time to merge two halves.
                </Span>
                <Span>
                  Best TC: O(nlogn)
                  <br />
                  Average TC: O(nlogn) <br />
                  Worst TC: O(nlogn) <br />
                  Space Complexity: O(n) //depends
                </Span>
                <Span>
                  <b>Merge vs heap sort:</b>
                </Span>
                <p>
                  HeapSort is the slowest of the sorting algorithms but unlike
                  merge and quick sort it does not require massive recursion or
                  multiple arrays to work. The merge sort is slightly faster
                  than the heap sort for larger sets, but it requires twice the
                  memory of the heap sort because of the second array.
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = Array(n1); 
    var R = Array(n2);
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    var i = 0;
    var j = 0;
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr,l, r){
    if(l>=r){
        return;
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}


var arr = [ 12, 11, 13, 5, 6, 7 ];
var arr_size = arr.length;
mergeSort(arr, 0, arr_size - 1);
console.log(arr, arr_size);
                        `,
                        output: `
                        [ 5, 6, 7, 11, 12, 13 ] 6
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Quick Sort (Partition/Selection exchange sort)</b>
                </Span>
                <Span>
                  It's also a divide and conquer algorithm. It's a internal
                  sorting algorithm. It picks an element as pivot and partitions
                  the given array around the picked pivot. There are many
                  different versions of quickSort that pick pivot in different
                  ways.
                </Span>
                <Span>
                  The key process in quickSort is partition(). Target of
                  partitions is, given an array and an element x of array as
                  pivot, put x at its correct position in sorted array and put
                  all smaller elements (smaller than x) before x, and put all
                  greater elements (greater than x) after x. All this should be
                  done in linear time
                </Span>
                <Span>
                  Best TC: O(nlogn)
                  <br />
                  Average TC: O(nlogn) <br />
                  Worst TC: O(n*n) <br />
                  Space Complexity: O(n)
                </Span>
                <Span>
                  Quick Sort is preferred over MergeSort for sorting Arrays. For
                  arrays, merge sort loses due to the use of extra O(N) storage
                  space. Quick Sort is also a cache friendly sorting algorithm
                  as it has good locality of reference when used for arrays.
                  Quick Sort is also tail recursive, therefore tail call
                  optimizations is done.
                </Span>
                <Span>
                  The time complexity of Quicksort is O(n log n) in the best
                  case, O(n log n) in the average case, and O(n^2) in the worst
                  case. But because it has the best performance in the average
                  case for most inputs, Quicksort is generally considered the
                  “fastest” sorting algorithm.
                </Span>
                <p>
                  Quick sort is not stable and merge sort is preferred over
                  quick sort for linked lists.
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Python: {
                        code: `def partition(start, end, array):
	
    pivot_index = start
    pivot = array[pivot_index]
    while start < end:
      while start < len(array) and array[start] <= pivot:
        start += 1
      while array[end] > pivot:
        end -= 1
      if(start < end):
        array[start], array[end] = array[end], array[start]
    array[end], array[pivot_index] = array[pivot_index], array[end]
    return end
    
def quick_sort(start, end, array):
    
    if (start < end):
      p = partition(start, end, array)
      quick_sort(start, p - 1, array)
      quick_sort(p + 1, end, array)
      
array = [ 10, 7, 8, 9, 1, 5 ]
quick_sort(0, len(array) - 1, array)  
print(f'Sorted array: {array}')
                        `,
                        output: `Sorted array: [1, 5, 7, 8, 9, 10]`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Shell Sort</b>
                </Span>
                <Span>
                  ShellSort is mainly a variation of Insertion Sort. In
                  insertion sort, we move elements only one position ahead. When
                  an element has to be moved far ahead, many movements are
                  involved.
                </Span>
                <Span>
                  Best TC: O(nlogn) // already sorted
                  <br />
                  For other cases it depends on gap sequence. Generally, Average
                  TC: O(nlogn) <br />
                  Worst TC: O(nlog^2n) <br />
                  Space Complexity: O(1)
                </Span>
                <Span>
                  Shell Sort improves its time complexity by taking the
                  advantage of the fact that using Insertion Sort on a partially
                  sorted array results in less number of moves.
                </Span>
                <p>
                  Time complexity of below implementation of shellsort is
                  O(n^2).
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        function sort(arr)
{
	let n = arr.length;

		for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))
		{
			for (let i = gap; i < n; i += 1)
			{
				let temp = arr[i];
				let j;
				for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
					arr[j] = arr[j - gap];
				arr[j] = temp;
			}
		}
		return arr;
}

let arr = [12, 34, 54, 2, 3];
arr = sort(arr);
console.log(arr);

                        `,
                        output: `[ 2, 3, 12, 34, 54 ]`,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Tree Sort</b>
                </Span>
                <Span>
                  Tree sort is a sorting algorithm that is based on Binary
                  Search Tree data structure. It first creates a binary search
                  tree from the elements of the input list or array and then
                  performs an in-order traversal on the created binary search
                  tree to get the elements in sorted order.
                </Span>
                <Span>
                  For implementation please refer to non linear data structures.
                </Span>
                <Span>
                  O(n log n) Adding one item to a Binary Search tree on average
                  takes O(log n) time. Therefore, adding n items will take O(n
                  log n) time.The worst case time complexity of Tree Sort can be
                  improved by using a self-balancing binary search tree like Red
                  Black Tree, AVL Tree. Using self-balancing binary tree Tree
                  Sort will take O(n log n) time to sort the array in worst
                  case.
                </Span>
                <Span>
                  tree sort algorithms require separate memory to be allocated
                  for the tree, as opposed to in-place algorithms such as
                  quicksort or heapsort. On most common platforms, this means
                  that heap memory has to be used, which is a significant
                  performance hit when compared to quicksort and heapsort. When
                  using a splay tree as the binary search tree, the resulting
                  algorithm (called splaysort) has the additional property that
                  it is an adaptive sort, meaning that its running time is
                  faster than O(n log n) for inputs that are nearly sorted.
                </Span>
                <Span>
                  Best TC: O(nlogn)
                  <br />
                  TC: O(nlogn) <br />
                  Worst TC: O(n^2) <br />
                  Space Complexity: O(n)
                </Span>
              </>
            ),
          },
          {
            title: "Index ( Non Comparison ) Based",
            content: (
              <>
                <Span>
                  <b>Count Sort</b>
                </Span>
                <Span>
                  Counting sort is a sorting technique based on keys between a
                  specific range. It works by counting the number of objects
                  having distinct key values (kind of hashing). Then doing some
                  arithmetic to calculate the position of each object in the
                  output sequence.
                </Span>
                <p>
                  Best TC: O(n+k) k is size of count array
                  <br />
                  TC: O(n+k) <br />
                  Worst TC: O(n+k) <br />
                  Space Complexity: O(n+k)
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `
                        function sort(arr)
{
	var n = arr.length;

	var output = Array(n).fill(0)

	var count = Array.from({length: 256}, (_, i) => 0);

	for (var i = 0; i < n; ++i)
		++count[arr[i].charCodeAt(0)];

	for (var i = 1; i <= 255; ++i)
		count[i] += count[i - 1];

	for (var i = n - 1; i >= 0; i--) {
		output[count[arr[i].charCodeAt(0)] - 1] = arr[i];
		--count[arr[i].charCodeAt(0)];
	}
	for (var i = 0; i < n; ++i)
		arr[i] = output[i];
	return arr;
}

	var arr = ['s','a','i','a','s','h','i','s','h'];

	arr = sort(arr);
	for (var i = 0; i < arr.length; ++i)
		console.log(arr[i]);

                        `,
                        output: `
                        a
a
h
h
i
i
s
s
s
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Bin / Bucket Sort</b>
                </Span>
                <Span>
                  Bucket sort is mainly useful when input is uniformly
                  distributed over a range. Counting sort can by used here
                  because of floating numbers
                </Span>
                <p>
                  Best TC: O(n+k) k is number of buckets
                  <br />
                  TC: O(n+k) <br />
                  Worst TC: O(n^2) <br />
                  Space Complexity: O(n+k)
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `function bucketSort(arr,n)
                        {
                          if (n <= 0)
                              return;
                            let buckets = new Array(n);
                        
                            for (let i = 0; i < n; i++)
                            {
                              buckets[i] = [];
                            }
                            for (let i = 0; i < n; i++) {
                              let idx = arr[i] * n;
                              buckets[Math.floor(idx)].push(arr[i]);
                            }
                            for (let i = 0; i < n; i++) {
                              buckets[i].sort(function(a,b){return a-b;});
                            }
                            let index = 0;
                            for (let i = 0; i < n; i++) {
                              for (let j = 0; j < buckets[i].length; j++) {
                                arr[index++] = buckets[i][j];
                              }
                            }
                        }
                        
                        let arr = [0.897, 0.565,
                            0.656, 0.1234,
                            0.665, 0.3434];
                        let n = arr.length;
                        bucketSort(arr, n);
                        
                        for (let el of arr.values()) {
                          console.log(el + " ");
                        }
                        `,
                        output: `
                        .1234 
0.3434 
0.565 
0.656 
0.665 
0.897 
                        `,
                      },
                    },
                  }}
                />
                <Span>
                  <b>Radix Sort</b>
                </Span>
                <Span>
                  We can't use counting sort when elements are range of 1 to n*n
                  because counting sort will take O(n^2) which is worse than
                  comparison-based sorting algorithms.
                </Span>
                <Span>
                  After every iteration, we make of corresponding number at
                  digit's place using % operator.
                </Span>
                <Span>
                  Radix Sort takes O(d*(n+b)) time where b is the base for
                  representing numbers, for example, for the decimal system, b
                  is 10. What is the value of d? If k is the maximum possible
                  value, then d would be O(logb(k)). So overall time complexity
                  is O((n+b) * logb(k))
                </Span>
                <p>
                  Best TC: O(d*(n+b))
                  <br />
                  TC: O(d*(n+b)) <br />
                  Worst TC: O(d*(n+b)) <br />
                  Space Complexity: O(n+2^d).
                </p>
                <CodeEditor
                  options={{
                    output: null,
                    codes: {
                      Javascript: {
                        code: `function getMax(arr,n)
                        {
                          let mx = arr[0];
                            for (let i = 1; i < n; i++)
                              if (arr[i] > mx)
                                mx = arr[i];
                            return mx;
                        }
                        
                        // can be solved using linked list as well
                        
                        function countSort(arr,n,exp)
                        {
                          let output = new Array(n); 
                            let i;
                            let count = new Array(10);
                            for(let i=0;i<10;i++)
                              count[i]=0;
                        
                            for (i = 0; i < n; i++)
                              count[Math.floor(arr[i] / exp) % 10]++;
                        
                            for (i = 1; i < 10; i++)
                              count[i] += count[i - 1];
                        
                            for (i = n - 1; i >= 0; i--) {
                              output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
                              count[Math.floor(arr[i] / exp) % 10]--;
                            }
                        
                            for (i = 0; i < n; i++)
                              arr[i] = output[i];
                        }
                        
                        function radixsort(arr,n)
                        {
                            let m = getMax(arr, n);
                            for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
                              countSort(arr, n, exp);
                        }
                        
                        
                        let arr=[170, 45, 75, 90, 802, 24, 2, 66];
                        let n = arr.length;
                        radixsort(arr, n);
                        console.log(arr)
                        `,
                        output: `
                        [
                          2, 24,  45,  66,
                         75, 90, 170, 802
                       ]
                        `,
                      },
                    },
                  }}
                />
              </>
            ),
          },
        ],
        content: (
          <>
            <Span>
              This algorithm is basically used to reorder elements in the
              respective data structure based on a comparison operator.
            </Span>
            <Span>
              <b>Criteria of analysis:</b>
            </Span>
            <p>
              1. No. of comparisons <br />
              2. No. of swaps <br />
              3. Adaptive ( we can detect already sorted lists using this
              feature ) <br />
              4. Stable ( order of duplicate elements should be maintained ){" "}
              <br />
              5. Extra Memory <br />
              <br />
            </p>
            <Span>Types of sorting:</Span>
            <Span>(a) Comparison based:</Span>
            <Span>
              Elements are compared with each other to get sorted array.
            </Span>
            <Span>Examples:</Span>
            <Span>
              Avg. Complexity (O(n*n)) : Bubble, Insertion and Selection. <br />
              Avg. Complexity (O(n*(log n))) : Heap, Merge, Quick, and Tree{" "}
              <br />
              Avg. Complexity (O(n^1.5)) : Shell{" "}
            </Span>
            <Span>(b) Index based:</Span>
            <Span>
              This method makes use of hashing and sort elements by creating
              index recursively.
            </Span>
            <Span>Examples:</Span>
            <p>Avg. Complexity (O(n)): Count, Bucket( Bin ) and Radix</p>
          </>
        ),
      },
      search: {
        title: "Searching",
        content: (
          <>
            <Span>
              It's used to check for an element or retrieve an element from any
              data structure where it is stored.
            </Span>
            <Span>
              <b>Types:</b>
            </Span>
            <Span>
              <b>1. Sequential Search:</b>
            </Span>
            <Span>
              In this type, data structure is traversed sequentially and every
              element is checked.
            </Span>
            <Span>
              <b>Example:</b>
            </Span>
            <Span>
              <b>Linear search:</b>
            </Span>
            <Span>
              It's a basic algorithm to find a element in the data structure.
            </Span>
            <Span>
              <b>Best case TC: </b> O(1) <br />
              <b>Worst case TC: </b> O(n) <br />
              <b>Space Complexity: </b> O(1)
            </Span>
            <p>
              <b>Implemtation (basic + optimized):</b>
            </p>
            <CodeEditor
              options={{
                output: null,
                codes: {
                  Javascript: {
                    code: `function basicSearch(arr,ele){
                      let flag = false;
                      for(let index in arr){
                        if(arr[index] === ele)
                        {
                          flag = true
                          return Number(index) + 1 +"th"
                        }
                      }
                      if(!flag) return "Not found"
                    }
                    
                    function optimizedSearch(arr, ele)
                    {
                      let left = 0;
                      let length = arr.length;
                      let right = length - 1;
                      let position = -1;
                      for(left = 0; left <= right;)
                      {
                        if (arr[left] == ele)
                        {
                          position = left;
                          console.log(
                            "Element found in array at " +
                            (position+1) + "th position with " +
                              (left + 1) + " attempt");
                          break;
                        }
                    
                        if (arr[right] == ele)
                        {
                          position = right;
                          console.log(
                            "Element found in array at " +
                            (position + 1) + "th position with " +
                            (length - right) + " attempt");
                          break;
                        }
                        left++;
                        right--;
                      }
                    
                      if (position == -1)
                        console.log("Not found in Array with " +
                              left + " Attempt");
                    }
                      
                    let arr = [ 1, 2, 3, 4, 5 ];
                    let search_element = 5;
                    console.log(basicSearch(arr, search_element))
                    optimizedSearch(arr, search_element);
                    `,
                    output: `
                    5th
Element found in array at 5th position with 1 attempt
                    `,
                  },
                },
              }}
            />
            <Span>
              <b>2. Interval Search:</b>
            </Span>
            <Span>
              These algorithms are specifically designed for sorted data
              structures. These types of algorithms are much more efficient than
              linear search as they repeatedly target the center of the search
              structure and divide the search space in half.
            </Span>
            <Span>
              <b>Binary search:</b>
            </Span>
            <Span>
              The original Binary search algorithm can not be applied to linked
              list because linked list by nature is dynamic and it is not known
              where the middle element is actually allocated. So, some of the
              efforts are required to apply binary search over a linked list to
              obtain the advantages. The main problem that binary search takes
              O(n) time in Linked List due to fact that in linked list we are
              not able to do indexing which led traversing of each element in
              Linked list take O(n) time.
            </Span>
            <Span>Complexities</Span>
            <Span>
              Best TC: O(1) // central index would directly match the desired
              value. <br />
              Avg. TC: O(log n) <br />
              Worst TC: O(log n) <br />
              Space Complexity (Iteration): O(1) <br />
              Space Complexity (Recursion): O(log n)
            </Span>
            <p>Implementation</p>
            <CodeEditor
              options={{
                output: null,
                codes: {
                  Javascript: {
                    code: `function recBinarySearch(arr, l, r, x){
                      if (r >= l) {
                          let mid = l + Math.floor((r - l) / 2);
                          if (arr[mid] == x)
                              return mid;
                          if (arr[mid] > x)
                              return binarySearch(arr, l, mid - 1, x);
                          return binarySearch(arr, mid + 1, r, x);
                      }
                      return -1;
                  }
                  
                  // every number can be represented as the sum of powers of 2.
                  // Hence it can solved using bitwise approach
                  
                  function binarySearch(arr, x)
                  {
                    let l = 0;
                    let r = arr.length - 1;
                    let mid;
                    while (r >= l) {
                      mid = l + Math.floor((r - l) / 2);
                      if (arr[mid] == x)
                        return mid;
                      if (arr[mid] > x)
                        r = mid - 1;
                      else
                        l = mid + 1;
                    }
                    return -1;
                  }
                  
                  const	arr =new Array(2, 3, 4, 10, 40);
                  const	x = 10;
                  const	n = arr.length;
                  const	result = binarySearch(arr, x);
                  console.log(result)
                  `,
                    output: `3`,
                  },
                },
              }}
            />
            <Span>
              <b>Two pointers technique:</b>
            </Span>
            <Span>
              Two pointers is really an easy and effective technique that is
              typically used for searching pairs in a sorted array.
            </Span>
            <p>
              <b>Time complexity: </b> O(n)
            </p>
            <CodeEditor
              options={{
                output: null,
                codes: {
                  Javascript: {
                    code: `
                    function isPairSum(A, N, X)
{
	var i = 0;
	var j = N - 1;

	while (i < j) {

		if (A[i] + A[j] == X)
			return true;
		else if (A[i] + A[j] < X)
			i++;
		else
			j--;
	}
	return false;
}

var arr = [ 3, 5, 9, 2, 8, 10, 11 ];
var val = 17;
var arrSize =7;

console.log(isPairSum(arr, arrSize, val));

                    `,
                    output: `true`,
                  },
                },
              }}
            />
            <Span>
              <b>BFS and DFS</b>
            </Span>
            <Span>
              For their implementations at trees and graphs , please refer to
              non-linear data structures.
            </Span>
          </>
        ),
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
