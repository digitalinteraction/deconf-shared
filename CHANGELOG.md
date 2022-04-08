# CHANGELOG

## 3.5.0

**features**

- Add `PrivateCalendar`

## 3.4.0

**features**

- Add API Routes/Sockets return types so all API calls can strongly type their response
  - `UserSessionAttendance`
  - `UserAttendance`
  - `UserAttendanceJson`
  - `SessionLinks`
  - `SessionLintResult`
  - `LocalisedContent`
  - `UserRegistration`
  - `UserRegistrationJson`

## 3.3.0

**features**

- Add `ScheduleRecord`
- Depreacate `SessionLink` in favour of `LocalisedLink`

## 3.2.0

**features**

- Add `RegistrationJson`
- Add `AttendanceJson`

## 3.1.0

**features**

- Add `RegisterRequest#userData`
- Add `Registration#userData`

## 3.0.0

**breaking changes**

Code has been split up based on the new deconf-api modules

- `ConfigFlag` renamed to `PageFlag`
- `ConfigSettings` renamed to `ConferenceConfig`
- `Localised` now has optional strings

**features**

- `JsonRepresentation` - A utility type to jsonify dates on objects
- `SessionAttendance`
- `CarbonCalculation`
- `CountryLocation`
- `ConferenceConfigJson`
- `Interpreter`
- `InterpretBooth`
- `ActiveBooth`
- `ActiveInterpreter`
- `DeconfConfig`
- `VerifyToken`

## 2.0.1

**fixes**

- Include the build this time

## 2.0.0

**changes**

```diff
+Session.participantCap number | null
```

## 1.0.1

**fixes**

- removed superstruct dependency as it wasn't needed

## 1.0.0

Initial release
