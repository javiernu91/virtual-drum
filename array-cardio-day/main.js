

// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const fifteen = inventors.filter((inventor) => {
      if (inventor.year >= 1500 && inventor.year < 1600) {
        return true;
      }
      
      // console.log(inventorResult);
    })
    console.log(inventors);
    console.table(fifteen);

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    const newInventors = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
    console.table(newInventors);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    const birthdateInventors = inventors.sort( (a, b) => {
      if (a.year > b.year) {
        return 1
      } else {
        return -1
      }
    })
     console.table(birthdateInventors);


    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

    const yearLiveAll = inventors.reduce(function(total, inventor) {
      return total + (inventor.passed - inventor.year);
    }, 0)

    console.log(yearLiveAll);


    // 5. Sort the inventors by years lived

    const orderInvLived = inventors.sort((a,b) => {
      const lastGuy = a.passed - a.year;
      const nextGuy  = b.passed - b.year;
      return lastGuy > nextGuy ? -1 : 1;
    })
    console.table(orderInvLived);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    // const divList = document.querySelector('.mw-category');
    // const links = Array.from(divList.querySelectorAll('a'));
    // const names = links
    //     .map(link => link.innerText)
    //     .filter(streetName => streetName.includes('de'));
        

    // 7. sort Exercise
    // Sort the people alphabetically by last name

    const orderALphabet = people.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      if (aLast > bLast) {
        return 1   
      } else return -1
    })

    console.log(orderALphabet);


    // 8. Reduce Exercise
    // Sum up the instances of each of these

    console.log(data);
    const transportation = data.reduce((obj, item) => {
      if(!obj[item]) {
        obj[item] = 0;
      } else {
        obj[item]++;
        return obj;
      }
    }, {});
    console.log(transportation);