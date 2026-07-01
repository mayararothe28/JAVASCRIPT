 var cart = [];
      var total = 0;

      var product = {
        name: "",
        price: 0,
        quantity: 1,
      };

      function AddToCart(productName, price) {
        product = {
          name: productName,
          price: price,
          quantity: 1,
        };

        let item = cart.find((i) => i.name === productName);

        if (item) {
          item.quantity++;
        } else {
          cart.push(product);
        }

        total += price;

        document.getElementById("total").innerText = total;

        updateCartDisplay();
      }
      function removeItem(name) {
        let index = cart.findIndex((item) => item.name === name);

        if (index != -1) {
          total = total - cart[index].price;

          if (cart[index].quantity > 1) {
            cart[index].quantity--;
          } else {
            cart.splice(index, 1);
          }

          document.getElementById("total").innerText = total;

          updateCartDisplay();
        }
      }
      function updateCartDisplay() {
        var cartDiv = document.querySelector(".cart");

        cartDiv.innerHTML = "<h2>Shopping Cart</h2>";

        if (cart.length == 0) {
          cartDiv.innerHTML += "<p>Cart is Empty</p>";
          return;
        }

        let ul = document.createElement("ul");

        cart.forEach(function (item) {
          let li = document.createElement("li");

          li.innerHTML =
            item.name +
            " | ₹" +
            item.price +
            " | Qty : " +
            item.quantity +
            " <button onclick=\"removeItem('" +
            item.name +
            "')\">Remove</button>";

          ul.appendChild(li);
        });

        cartDiv.appendChild(ul);
      }
      function sortByName() {
        cart.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });

        updateCartDisplay();
      }
      function sortByPrice() {
        cart.sort(function (a, b) {
          return a.price - b.price;
        });

        updateCartDisplay();
      }