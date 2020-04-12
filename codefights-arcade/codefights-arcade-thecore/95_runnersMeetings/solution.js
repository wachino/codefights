function runnersMeetings(startPosition, speed) {
  var maxMeetings = -1;
  var meetingPoint;
  var currentMeeting = -1;
  for (var i = 0; i < startPosition.length; i++) {
    for (var j = i + 1; j < startPosition.length; j++) {
      meetingPoint =
        (startPosition[i] - startPosition[j]) / (speed[j] - speed[i]);
      if (meetingPoint >= 0) {
        currentMeeting = 2;
        for (var k = j + 1; k < startPosition.length; k++) {
          if (
            startPosition[i] + speed[i] * meetingPoint ===
            startPosition[k] + speed[k] * meetingPoint
          ) {
            currentMeeting++;
          }
        }
        if (currentMeeting > maxMeetings) {
          maxMeetings = currentMeeting;
        }
      }
    }
  }
  return maxMeetings;
}
