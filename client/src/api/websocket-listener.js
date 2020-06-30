import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

function register(registrations) {
    const socket = SockJS('/payroll');
    const stompClient = Stomp.over(socket);
    stompClient.connect({}, function(frame) {
        registrations.forEach(function (registration) {
            stompClient.subscribe(registration.route, registration.callback);
        });
    });
}

export default register;