$(document).ready(function () {
    function Booking(name, email, phone, id, regNo, branch, type, services, duration) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.id = id;
        this.regNo = regNo;
        this.branch = branch;
        this.type = type;
        this.services = services;
        this.duration = duration;
    }
    var servicesOrdered = [];
    Booking.prototype.finalFee = function () {
        return this.getServicesFee() + this.getDurationFee()
    };
    Booking.prototype.getServicesFee = function () {
        if (this.type === "Medium") {
            if (this.services === "Engine service") {
                return 3000;
            } else if (this.services === "Power System") {
                return 2500;
            } else if (this.services === "Oil services") {
                return 3000;
            } else if (this.services === "Parking") {
                return 500;
            } else {
                return 600;
            };
        } else {
            if (this.services === "Engine service") {
                return 2000;
            } else if (this.services === "Power System") {
                return 1500;
            } else if (this.services === "Oil services") {
                return 2500;
            } else if (this.services === "Parking") {
                return 300;
            } else {
                return 300;
            };
        };
    };
    Booking.prototype.getDurationFee = function () {
        if (this.type === "Heavy") {
            if (this.duration === "Urgently") {
                return 1000;
            } else if (this.duration === "Late") {
                return 3000;
            } else {
                return 0;
            }
        } else if (this.type === "Medium") {
            if (this.duration === "Urgently") {
                return 1000;
            } else if (this.duration === "Late") {
                return 1500;
            } else {
                return 0;
            };
        } else {
            if (this.duration === "Urgently") {
                return 800;
            } else if (this.duration === "Late") {
                return 1200;
            } else {
                return 0;
            };
        };
    };
    $("#userInput").submit(function (e) {
        e.preventDefault();
        var userName = $("#fname").val();
        var userEmail = $("#email").val();
        var userPhone = $("#fphone").val();
        var userId = $("#fid").val();
        var userRegNo = $("#fnumber").val();
        var userBranch = $("#branch").val();
        var userType = $("#type").val();
        var userService = $("#services").val();
        var userDuration = $("#duration").val();
        var newBooking = new Booking(userName, userEmail, userPhone, userId, userRegNo, userBranch, userType, userService, userDuration)
        $("#checkout").show();

        servicesOrdered.push(newBooking);
        $("#fname").val("");
        $("#email").val("");
        $("#fphone").val("");
        $("#fid").val("");
        $("#fnumber").val("");
        $("#branch").val("");
        $("#type").val("");
        $("#services").val("");
        $("#duration").val("");


        $("#booking-summary").append(
            "<tr id='booking-" +
            servicesOrdered.length +
            "'>" +
            '<th scope="row">' +
            newBooking.name +
            "</th>" +
            "<td>" +
            newBooking.email +
            "</td>" +
            "<td>" +
            newBooking.phone +
            "</td>" +
            "<td>" +
            newBooking.id +
            "</td>" +
            "<td>" +
            newBooking.regNo +
            "</td>" +
            "<td>" +
            newBooking.branch +
            "</td>" +
            "<td>" +
            newBooking.type +
            "</td>" +
            "<td>" +
            newBooking.services +
            " - " +
            newBooking.getServicesFee() +
            "</td>" +
            "<td>" +
            newBooking.duration +
            " - " +
            newBooking.getDurationFee() +
            "</td>" +
            "<td>" +
            newBooking.finalFee() +
            "</td>" +
            "<td>" +
            '<i class="fas fa-trash" id="delete-' +
            servicesOrdered.length +
            '"></i>' +
            "</td>" +
            "</tr>"
        );

        $("#confirm-button").show();
        $("#checkout").click(function () {
            alert("Thank you " + newBooking.name + " for booking with us on " + newBooking.email + ". We value you.")
        });

    });

    for (let i = 1; i < 10; i++) {
        $(document).on("click", "#delete-" + i, function () {
            $("#booking-summary").empty();
            servicesOrdered.splice(i - 1, 1);
            var serviceId = 1;
            servicesOrdered.forEach(function (booking) {
                $("#booking-summary").append(
                    "<tr id='booking-" +
                    serviceId +
                    "'>" +
                    '<th scope="row">' +
                    booking.name +
                    "</th>" +
                    "<td>" +
                    booking.email +
                    "</td>" +
                    "<td>" +
                    booking.phone +
                    "</td>" +
                    "<td>" +
                    booking.id +
                    "</td>" +
                    "<td>" +
                    booking.regNo +
                    "</td>" +
                    "<td>" +
                    booking.branch +
                    "</td>" +
                    "<td>" +
                    booking.type +
                    "</td>" +
                    "<td>" +
                    booking.services +
                    " - " +
                    booking.getServicesFee() +
                    "</td>" +
                    "<td>" +
                    booking.duration +
                    " - " +
                    booking.getDurationFee() +
                    "</td>" +
                    "<td>" +
                    booking.finalFee() +
                    "</td>" +
                    "<td>" +
                    '<i class="fas fa-trash" id="delete-' +
                    serviceId +
                    '"></i>' +
                    "</td>" +
                    "</tr>"
                );
            });
            if (servicesOrdered.length == 0) {
                $("#confirm-button").hide();
            }
        });
    }

    $("#contactUs").submit(function (e) {
        e.preventDefault();
        var cname = $("#cname").val();
        var cemail = $("#cemail").val();
        var cmessage = $("#cmessage").val();
        alert("Thank you " + cname + " for reaching us.");
        $("#cname").val("");
        $("#cemail").val("");
        $("#cmessage").val("");


    });

});