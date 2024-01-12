export function ex2() {
    class User {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname
        }
    };

    class RegularUser extends User {

    };
    class PremiumUser extends User {
        premiumAccount = null;
        buyPremium() {
            //на год по умолчанию
            this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
        }

    }

    function getAccoutInfo(user) {
        if (user instanceof PremiumUser) {
            return `Premium for ${user.name} ${user.surname} is active before ${user.premiumAccount == null
                ? "no data"
                : user.premiumAccount}`;
        } else if (user instanceof RegularUser) {
            return `${user.name} ${user.surname} has no premium.`;
        } else {
            return "User is undefined";
        }
    };

    const regular = new RegularUser("Ivan", "Ivanov");
    const premium = new PremiumUser("Petr", "Petrov");
    const otherPremium = new PremiumUser("Ilon", "Musk");

    otherPremium.buyPremium();

    console.log(getAccoutInfo(regular));
    console.log(getAccoutInfo(premium));
    console.log(getAccoutInfo(otherPremium));


}