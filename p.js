fetch('/chall/i/878ac0bc151e117e/report', {
  method: 'POST',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  body: 'type=rumour&description=' + encodeURIComponent('ADMIN_JS_RAN_ONCE')
});
